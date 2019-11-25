import axios from 'axios';

var pose_axios = axios.create({
    baseURL: 'https://pose.ludonow.com:8787',
    // baseURL: 'http://ec2-34-214-32-108.us-west-2.compute.amazonaws.com:8787',
    withCredentials: 'true',
    timeout: 2000000,
});

var api_axios = axios.create({
    baseURL: 'https://api.ludonow.com',
    withCredentials: 'true',
    timeout: 2000000,
});

function newLudoRTC (options = {}) {
    if (process.client) {
        if (options.dev) {
            pose_axios = axios.create({
                baseURL: 'http://52.41.223.89:8787',
                withCredentials: 'true',
                timeout: 2000000,
            });
        }
        return new LudoRTC(options);
    } else {
        return null;
    }
}

class LudoRTC {
    constructor(config = {}) {
        this.negotiate = this.negotiate.bind(this);
        this.createPeerConnection = this.createPeerConnection.bind(this);
        this.waitForICE = this.waitForICE.bind(this);
        this.openCamera = this.openCamera.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.getResult = this.getResult.bind(this);
        this.dc = null;
        this.video_list = [];
        let default_width = 640;
        let default_height = 480;
        // if (window.screen.orientation.angle == 0 && window.screen.orientation.type == 'portrait-primary') {
        // let mal = window.matchMedia('(orientation: portrait)')
        // if(mal.matches){
        //     let temp = default_width;
        //     default_width = default_height;
        //     default_height = temp;
        // }
        let default_config = {
            sdpSemantics: 'unified-plan',
            iceServers : [{urls: ['stun:stun.l.google.com:19302']}],
            constraints : {
                audio: false,
                video: {
                    width:default_width,
                    height:default_height,
                    // aspectRatio: 1.777777778,
                    frameRate: 30,
                    facingMode: 'user',
                }
            },
            video_element_id:'#video',
            post_info : {
                pose_id: "yoga_27",
                user_id: "guest",
                language: 'zh-tw',
            },
        };
        this.final_config = Object.assign(default_config,config);
    }

    async openCamera() {
        let constraints = this.final_config.constraints;

        try {
            let stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.stream = stream;
            let video_element = document.querySelector(this.final_config.video_element_id);
            if ('srcObject' in video_element) {
                video_element.srcObject = stream
            } else {
                video_element.src = window.URL.createObjectURL(stream)
            }
            video_element.play();
            return true;
        } catch (error) {
            this.$errorLogger('ludoRTC','openCamera',error.toString());
            alert('Could not acquire media: ' + error);
            return false;
        }
        
    }

    async startRecording(post_info = {}) {
        if (post_info) {
            this.final_config.post_info = post_info;
        }
        let mal = window.matchMedia('(orientation: portrait)')
        if(!mal.matches){
            post_info.orientation = 'landscape';
        } else {
            post_info.orientation = 'portrait';
        }
        // console.log('orientation : ',post_info.orientation)
        console.log(this.final_config);
        this.pc = this.createPeerConnection(this.final_config);
        let pc = this.pc;
        // data channel        
        let dc = pc.createDataChannel('chat', {ordered:true});
        this.dc = dc;
        let video_list = this.video_list;

        dc.onclose = function() {
        };
        dc.onopen = function() {
            dc.send('get_video_name');
        };
        dc.onmessage = function(evt) {
            video_list.push(evt.data);
            console.log(video_list);
        };

        let stream = this.stream;
        stream.getTracks().forEach(function(track) {
            console.log('add track to pc')
            pc.addTrack(track, stream);
        });
        await this.negotiate();
    }

    createPeerConnection() {
        let pc = new RTCPeerConnection(this.final_config);
    
        // register some listeners to help debugging
        pc.addEventListener('icegatheringstatechange', function() {
            console.log('pc.iceGatheringState' + pc.iceGatheringState);
        }, false);
    
        pc.addEventListener('iceconnectionstatechange', function() {
            console.log('pc.iceConnectionState' + pc.iceConnectionState);
        }, false);
    
        pc.addEventListener('signalingstatechange', function() {
            console.log('pc.signalingState' + pc.signalingState);
        }, false);

        // pc.ontrack = function(evt) {
        //     if (evt.track.kind == 'video') {
        //         document.getElementById('video').srcObject = evt.streams[0];
        //     } else {
        //         console.log('get track audio')
        //     }
        // }
        console.log('create pc ')
        return pc;
    }

    waitForICE() {
        var pc = this.pc;
        return new Promise(function(resolve) {
            if (pc.iceGatheringState === 'complete') {
                resolve();
            } else {
                function checkState() {
                    if (pc.iceGatheringState === 'complete') {
                        pc.removeEventListener('icegatheringstatechange', checkState);
                        resolve();
                    }
                }
                pc.addEventListener('icegatheringstatechange', checkState);
            }
        });
    }

    async negotiate() {
        try {
            let post_info = this.final_config.post_info;
            let offer = await this.pc.createOffer();
            await this.pc.setLocalDescription(offer);
            await this.waitForICE();

            offer = this.pc.localDescription;
            let res = await pose_axios.post('/offer',JSON.stringify({
                sdp: offer.sdp,
                type: offer.type,
                pose_id: post_info.pose_id,
                user_id: post_info.user_id,
                language: post_info.language,
                orientation: post_info.orientation,
            }));
            await this.pc.setRemoteDescription(res.data);
            return true;
        } catch (error) {
            console.log(error);
            return  false;
        }
    }

    stopRecording() {
        try {
            let pc = this.pc;
            let dc = this.dc;
            if (dc) {
                dc.close();
            }
            // close transceivers
            if (pc && pc.getTransceivers) {
                pc.getTransceivers().forEach(function(transceiver) {
                    if (transceiver.stop) {
                        transceiver.stop();
                    }
                });
                setTimeout(function() {
                    pc.close();
                }, 500);
            }
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    closeCamera() {
        // 停止所有的輸入或輸出的串流裝置（例如，關攝影機）
        this.stream.getTracks().forEach(function (track) {
            track.stop()    
        });
    }

    async getResult() {
        var total_score = 0;
        let post_info = this.final_config.post_info;
        for (let index = 0; index < this.video_list.length; index++) {
            const video_file_name = this.video_list[index];
            try {
                let response = await api_axios.post('/apis/get-pose-result',{user_id:post_info.user_id,pose_id:post_info.pose_id,file_name:video_file_name})
                if (response.data.result.status == 200) {
                    total_score += parseInt(response.data.result.score)
                } else if(response.data.result.status == 102) { 
                    total_score += 30
                    total_score += parseInt(Math.random(6) * 20)
                } else if(response.data.result.status == 204) {
                    total_score += parseInt(response.data.result.score)
                } else if(response.data.result.status == 404){
                    total_score += 30
                    total_score += parseInt(Math.random(6) * 20)
                } else {
                    total_score += 30
                    total_score += parseInt(Math.random(6) * 20)
                }
            } catch (error) {
                console.error(error)
                total_score += 30
                total_score += parseInt(Math.random(6) * 20)
            }
        }
        return total_score / this.video_list.length;
    }

    async getDetailResult() {
        var total_score = 0;
        let post_info = this.final_config.post_info;
        let detail_results = []
        for (let index = 0; index < this.video_list.length; index++) {
            const video_file_name = this.video_list[index];
            try {
                let response = await api_axios.post('/apis/get-pose-result',{user_id:post_info.user_id,pose_id:post_info.pose_id,file_name:video_file_name})
                detail_results.push(response.data.result)
            } catch (error) {
                console.error(error)
                total_score += 30
                total_score += parseInt(Math.random(6) * 20)
                detail_results.push({error_code: 500});
            }
        }
        return detail_results[0];
    }

    getVideoList() {
        return this.video_list;
    }
}
export default ({ app }, inject) => {
    inject('newLudoRTC', newLudoRTC);
}