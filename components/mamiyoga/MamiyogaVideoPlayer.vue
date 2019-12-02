<template>
    <div id="player">
        <div id="videoBox" style="position: relative;" :style="{width: width , height: height}">
            <div :style="{display: showCanvas && haveTag ? 'flex':'none'}" id="canvas-container">
                <div id="tag-container" style="position: relative" :style="{width: real_W + 'px', height: real_H + 'px'}">
                    <div id="teacher-advice" style="display:none" :style="{borderColor: textBorder, backgroundColor: textBg, color: textColor }">{{advice}}</div>
                    <div id="teacher-pic" :style="{backgroundImage: `url('${teacherPic}')`}"></div>
                    <div id="pose-amount" :style="{borderColor: textBorder, backgroundColor: textBg, color: textColor }">{{`第${poseAmount}組`}}</div>
                </div>
            </div>
            <video id="myVideo" playsinline :src="vidResult" @timeupdate="videoProcess();" @loadedmetadata="showResultTag()"></video>
            <div id="player-controls">
                <div class="controls-line" :style="{zoom: $mq == 'desktop' ? '.18':'.13'}">
                    <div class="play-vid-btn" @click="playVideo" :class="playing_video ? '':'paused'"></div>
                </div>
                <div class="show-vid-time controls-line">{{vid_current_time}}</div>
                <div id="progress" class ="controls-line" @click="goCurrentTime">
                    <div id="progress-bar"></div>
                </div>
                <div class="show-vid-time controls-line">{{vid_duration_time}}</div>
                <div class="controls-line" :style="{zoom: $mq == 'desktop' ? '.2':'.14'}">
                    <svg id="vol-btn" width="100" height="120" @click="mutedVideo">
                        <path d="M30,35 H20 Q5 35, 5 45,V65,Q5 80, 15 80 h15 L65 105,V10 L30 35" fill="#fff" stroke="none" stroke-width="5" />
                        <path d="M78,85 V30" stroke="#fff" stroke-width="9" v-if="!isMuted" />
                        <path d="M95,95 V20" stroke="#fff" stroke-width="9" v-if="!isMuted" />
                        <path d="M5,25 L80 90" stroke="#fff" stroke-width="10" class="muted-line" :class="isMuted ? 'show':''"/>
                    </svg>
                </div>
                <div class="controls-line" :style="{zoom: $mq == 'desktop' ? '.38':'.28'}">
                    <svg id="prompt-btn" width="100" height="100" @click="showCanvas = !showCanvas">
                        <rect x="25" y="25" rx="10" ry="10" width="60" height="40" stroke="none" fill="#fff"/>
                        <polygon points="35,63 30,73 50,63" stroke="none" fill="#fff"/>
                        <path d="M25,20 L85 75" stroke="#fff" stroke-width="8" class="muted-line" :class="showCanvas ? '':'show'" />
                    </svg>
                </div>
                <div class="controls-line" :style="{zoom: $mq == 'desktop' ? '.39':'.27'}">
                    <svg @click="fullscreen" v-if="!isFullscreen" id="fullscreen-btn" width="100" height="100">
                        <path d="M45,25 H25 V45" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M45,75 H25 V55" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M55,25 H75 V45" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M55,75 H75 V55" stroke="#fff" stroke-width="8" fill="none" />
                    </svg>
                    <svg @click="closeFullscreen" v-if="isFullscreen" id="close-fullscreen-btn" width="100" height="100">
                        <path d="M40,25 V40 H25" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M40,75 V60 H25" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M60,25 V40 H75" stroke="#fff" stroke-width="8" fill="none" />
                        <path d="M60,75 V60 H75" stroke="#fff" stroke-width="8" fill="none" />
                    </svg>
                </div>
            </div>
            <div v-if="!isLoaded" id="video-loading">
                <svg height="100" width="100">
                    <circle id="loading-circle" cx="50" cy="50" r="40" stroke="#707070" stroke-linecap="round" stroke-width="9" fill="none" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    head:{
        script:[
            { id: 'VideoFrame' , src: 'https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/VideoFrame.min.js'}
        ],
    },
    data:()=>({
        images:[],
        vid: '',
        v_W: '',
        v_H: '',

        real_W:'',
        real_H:'',

        playing_video: true,
        isMuted: false,
        isFullscreen: false,
        showCanvas: true,
        show_advice_timeout:{},
        advice: '',
        poseAmount: 0,
        textBorder: '#aaa8aa',
        textBg: '#858585',
        textColor: '#fff',

        data: [],
        haveTag: false,

        isLoaded: false,
        vid_current_time: '',
        vid_duration_time: '',

        window_full: false,
        stop_tag: false,
        now_frame: 0,
    }),
    props:{
        vidResult: src,
        teacherPic: String,
        width: String,
        height: String,
    },
    async mounted(){
        if(process.client){
            this.vid = document.getElementById('myVideo');
            this.reSize()
            this.data = await require('~/config/test-player-data.json')
            console.log(this.data)

            window.onresize = function temp(){
                let advice = document.getElementById("teacher-advice");
                let pic = document.getElementById("teacher-pic");
                let container = document.getElementById("tag-container")
                this.reSize()
                this.showTagCallback(this.now_frame, 10, this.data, advice, pic, container, this.vid);
            }.bind(this)

            this.vid.onloadeddata = function(){
                this.isLoaded = true
            }.bind(this)

            Array.prototype.bisect = function (val) {
                var idx;
                if (this.length === 0) {
                    return 0;
                }
                for (idx=0; idx < this.length; idx++) {
                    if (val < this[idx]) {
                        return idx;
                    }
                }
                return idx;
            }
        }
    }, 
    methods:{
        preload(img){
            for(var i = 0;i < img.length; i++){
                this.images[i] = new Image()
                this.images[i].src = img[i]
            }
        },
        playVideo(){
            if(this.playing_video){
                this.vid.play();
            } else {
                this.vid.pause();
                clearTimeout(this.show_advice_timeout);
            }
            this.playing_video = !this.playing_video
            
        },
        mutedVideo(){
            if(this.isMuted){
                this.vid.muted = false;
            } else {
                this.vid.muted = true;
            }
            this.isMuted = !this.isMuted
        },
        videoProcess(){
            let progress = document.getElementById('progress')
            let progressBar = document.getElementById('progress-bar')

            progress.value = this.vid.currentTime
            progressBar.style.width = Math.floor((this.vid.currentTime / this.vid.duration) * 100) + '%';
            progressBar.style.transitionDuration = `${(this.vid.duration) / 100 * 3}s`;

            let mins = Math.floor(this.vid.currentTime / 60)
            let secs = Math.floor(this.vid.currentTime % 60)
            if(secs < 10) {
                secs = '0' + String(secs);
            }
            this.vid_current_time = mins + ':' + secs

            let all_mins = Math.floor(this.vid.duration / 60)
            let all_secs = Math.floor(this.vid.duration % 60)
            if(all_secs <10){
                all_secs = '0'+String(all_secs)
            }
            if(!isNaN(all_mins) && !isNaN(all_secs)) {
                this.vid_duration_time = all_mins+':'+all_secs
            }
            
        },
        goCurrentTime(e){
            let progress = document.getElementById('progress')
            let progressBar = document.getElementById('progress-bar')
            let advice = document.getElementById("teacher-advice");
            let pic = document.getElementById("teacher-pic");
            let container = document.getElementById("tag-container")

            progressBar.classList.add('jump-current')
            let pos = (e.pageX  - progress.offsetLeft) / progress.offsetWidth;
            this.vid.currentTime = pos * this.vid.duration
            setTimeout(() => {
                progressBar.classList.remove('jump-current')
            }, 3000);
            this.showTagCallback(Math.floor(this.vid.currentTime*30), 10, this.data, advice, pic, container, this.vid);
            // this.showTagCallback(frame,slice,data,advice,pic,container,current_vid);
            
            // this.showResultTag()
            // let data = this.data
            // let advice = document.getElementById("teacher-advice");
            // let pic = document.getElementById("teacher-pic");
            // let container = document.getElementById("tag-container")
            // let slice = 10;
            // let current_vid = this.vid


            // var video = VideoFrame({
            //     id: 'myVideo',
            //     frameRate: 30,
            //     callback: function(frame) {
            //         // console.log(frame)
            //         this.showTagCallback(frame,slice,data,advice,pic,container,current_vid)
            //     }.bind(this)
            //     // }
            // })
            // video.listen('frame');
        },
        fullscreen(){
            let container = document.getElementById("tag-container")
            let doc = document.querySelector('#videoBox')
            let col = document.querySelector('#player-controls')
            let player = document.querySelector('#player')
            let advice = document.getElementById("teacher-advice");
            let pic = document.getElementById("teacher-pic");
            this.isFullscreen = true;
            let userAgent = navigator.userAgent;
            let browser_type = 'safari';

            if(userAgent.toLocaleLowerCase().match(/chrome/)){
                browser_type = 'chrome';
            }
            console.log(userAgent)
            if(browser_type == 'safari'){
                if (!/iPhone|iPad|iPod/i.test(userAgent)) {
                    doc.classList.add('main-on-safari-mac')
                    this.reSize()
                    console.log('is safari desktop')
                } else {
                    doc.classList.add('main-on-safari-phone')
                    col.classList.add('controls-on-safari-phone')
                    this.vid.classList.add('video-on-safari-phone')
                    player.classList.add('player-on-safari-phone')
                    this.reSize()
                    console.log('is safari phone')
                }
            } else{
                this.window_full = true
                doc.requestFullscreen();
                this.reSize()
            }
            this.showTagCallback(this.now_frame, 10, this.data, advice, pic, container, this.vid);
        },
        closeFullscreen(){
            let container = document.getElementById("tag-container")
            let doc = document.querySelector('#videoBox')
            let col = document.querySelector('#player-controls')
            let player = document.querySelector('#player')
            let userAgent = navigator.userAgent;
            let advice = document.getElementById("teacher-advice");
            let pic = document.getElementById("teacher-pic");
            this.isFullscreen = false;
            this.window_full = false;
            let browser_type = 'safari';
            if(userAgent.toLocaleLowerCase().match(/chrome/)){
                browser_type = 'chrome';
            }
            if(browser_type == 'safari'){
                doc.removeAttribute("class")
                col.removeAttribute("class")
                player.removeAttribute("class")
                this.vid.removeAttribute("class")
                this.reSize()
            } else if(userAgent.match("Firefox")){
                document.cancelFullScreen();
            } else {
                document.exitFullscreen();
            }
            container.removeAttribute("class");
            this.showTagCallback(this.now_frame, 10, this.data, advice, pic, container, this.vid);
        },
        showResultTag(){
            let data = this.data
            let advice = document.getElementById("teacher-advice");
            let pic = document.getElementById("teacher-pic");
            let container = document.getElementById("tag-container")
            let slice = 10;
            let current_vid = this.vid
            var video = VideoFrame({
                id: 'myVideo',
                frameRate: 30,
                callback: function(frame) {
                    this.showTagCallback(frame,slice,data,advice,pic,container,current_vid);
                    this.now_frame = frame;
                }.bind(this)
            })
            video.listen('frame');
            video.seekForward();
        },
        reSize(){
            let userAgent = navigator.userAgent;
            let container = document.getElementById("tag-container")
            let advice = document.getElementById("teacher-advice");
            let pic = document.getElementById("teacher-pic");
            if(this.window_full){
                if(/Windows/i.test(userAgent)){
                    this.v_W = window.innerWidth
                    this.v_H = window.innerHeight
                    this.real_W = this.v_W
                    this.real_H = (this.real_W / 16 * 9 )
                    container.classList.add('fullscreen-desktop')
                }
                if(userAgent.match(/android/i)){
                    // alert('is android')
                    this.v_W = window.innerWidth
                    this.v_H = window.innerHeight
                    // alert(this.v_W + '+' +this.v_H)
                    // this.real_H = this.v_H
                    this.real_W = this.v_W
                    this.real_H = (this.real_W / 16 *9)
                    if(this.v_W > this.v_H){
                        this.real_H = this.v_H
                        this.real_W = (this.real_H / 9 * 16)
                        container.classList.add('fullscreen-android')
                    }

                    // this.vW = window.innerWidth
                    // this.vH = window.innerHeight

                    // this.realH = this.vH
                    // this.realW = this.vW
                    // if(this.vW > this.vH){
                    //     container.classList.add('fullscreen-android')
                    // }
                }
            } else {
                
                this.v_W = this.vid.offsetWidth
                this.v_H = this.vid.offsetHeight 
                console.log(this.v_W , this.v_H)
                if(this.v_W > this.v_H) {
                    this.real_H = this.v_H
                    this.real_W = (this.real_H / 9 * 16 )
                } else {
                    this.real_W = this.v_W
                    this.real_H = (this.real_W / 16 * 9)
                }
                console.log(this.window_full)
            }
            // this.showResultTag()
            // if(this.v_W < 1366 || this.v_W == 1366) {
            //     this.real_W = this.v_W
            //     this.real_H = (this.real_W / 16 * 9 )
            // } else {
            //     this.real_H = this.v_H
            //     this.real_W = 1366
            // }
        },
        showTagCallback(frame,slice,data,advice,pic,container,current_vid){
            let sliced_frame = parseInt(frame / slice);
            let entered = false;
            let c_array = []
            data.forEach(element => {
                c_array.push(parseInt(element["frame"]))
            });
            if(c_array.bisect(frame) - 1 < 0) return;
            let status = data[c_array.bisect(frame) - 1]
            console.log(c_array.bisect(frame) - 1)
            // let c_frame = data.find(element => element["frame"] == frame)
            if(status) {
                console.log(status);
                if(status.action == "start_frame" || status.action == "next_reps"){
                    this.haveTag = true
                    this.poseAmount = status.rep
                    let old_dot = document.getElementsByClassName('pose-dot')
                    while(old_dot.length > 0){
                        old_dot[0].parentNode.removeChild(old_dot[0]);
                    }
                    this.stop_tag = false
                }
                if(status.action == "show_wrong_tags"){
                    if(!this.stop_tag){
                        current_vid.pause()
                        advice.style.display = 'block'
                        pic.style.display = 'block'
                        this.advice = status.wrong_tags
                        this.stop_tag = true
                        this.show_advice_timeout = setTimeout(() => {
                            current_vid.play();
                        }, 5000);
                        this.poseAmount = status.rep

                        for(let n = 0;n<status.points.length;n++){
                            let dot = document.createElement('div')
                            dot.classList.add('pose-dot')
                            dot.style.top = `${(status.points[n][0]/360)*this.real_H}px`
                            dot.style.left = `${(status.points[n][1]/640)*this.real_W}px`
                            container.appendChild(dot)
                        }
                    }
                } else if (status.action == "show_correct_tags"){
                    // current_vid.pause()
                    advice.style.display = 'block'
                    pic.style.display = 'block'
                    this.advice = '姿勢正確'
                    // this.show_advice_timeout = setTimeout(() => {
                    //     current_vid.play();
                    // }, 500);
                    this.poseAmount = status.rep
                    this.stop_tag = false
                } else {
                    advice.style.display = 'none'
                    pic.style.display = 'none'
                    let old_dot = document.getElementsByClassName('pose-dot')
                    while(old_dot.length > 0){
                        old_dot[0].parentNode.removeChild(old_dot[0]);
                    }
                    this.stop_tag = false
                }
            } 
        },
        
        readTextFile(file, callback){
            let rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        },
    },
    computed:{
        
    }
}
</script>

<style>
#myVideo::-webkit-media-controls {
  display:none !important;
}
#myVideo::-webkit-media-controls-enclosure {
  display:none !important;
}
#myVideo{
    background: #000;
    width: 100%;
    height: 100%;
}
#canvas-container {
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
}
#videoBox {
    min-width: 320px;
    min-height: 320px;
}
#player-controls {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2147483647;
    bottom: 0px;
    width: 100%;
    justify-content: center;
    /* padding: 0 5px; */
    height: 30px;
    margin-bottom: 10px;
}
.controls-line {
    margin: 0 10px;
}
.show-vid-time {
    color: #fff;
    font-size: 12px;
}
.play-vid-btn:hover {
    opacity: 1;
}
.play-vid-btn {
    width: 100px;
    height: 100px;
    position: relative;
    opacity: .8;
}
.play-vid-btn::before,.play-vid-btn::after {
    content: "";
    position: absolute;
    width: 0;
    border-style: solid;
    border-color: transparent;
    border-left-color: #fff;
    transition: .1s;
}
.play-vid-btn::before {
    left: 0;
    top: 0;
    height: 100px;
    border-width: 25px 50px 25px 50px;
}
.play-vid-btn::after {
    left: 50px;
    top: 25px;
    height: 0;
    border-width: 25px 0 25px 50px;
}
.play-vid-btn.paused:before {
  height: 100px;
  border-width: 0 0 0 33.3333333333px;
}
.play-vid-btn.paused:after {
  left: 66.6666666667px;
  top: 0;
  height: 100px;
  border-width: 0 0 0 33.3333333333px;
}
#vol-btn {
    /* transform: scale(.3); */
    opacity: .8;
}
#vol-btn:hover {
    opacity: 1;
}
.muted-line {
    opacity: 0;
}
.muted-line.show {
    opacity: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 2s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
#progress {
    width: 50%;
    max-width: 800px;
    min-width: 100px;
    height: 5px;
    background: rgba(255,255,255,.5);
}
#progress-bar {
    background:#fff; 
    height: 100%;
    transition: width ease;
}
.jump-current{
    transition: unset !important;
}
#fullscreen-btn {
    opacity: .8;
}
#fullscreen-btn:hover, #close-fullscreen-btn:hover{
    opacity: 1;
}
#close-fullscreen-btn {
    opacity: .8;
}
#prompt-btn {
    opacity: .8;
}
#prompt-btn:hover{
    opacity: 1;
}
#teacher-advice,#pose-amount {
    padding:10px 20px;
    border: 5px solid;
    border-radius: 15px;
    font-size: 12px;
    position: absolute;
}
#teacher-pic {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 10px;
}
#teacher-advice {
    max-width: 200px; 
    bottom: 40px;
    left: 30px;
}
#pose-amount {
    bottom: 0;
    right: 0;
}
#teacher-advice::after{
    content: '';
    width:0px;
    height:0px;
    border-width:10px 12px 0 0px;
    border-style:solid;
    border-color:#aaa8aa transparent transparent transparent ;
    position:absolute;
    bottom:-15px;
    left:10px;
}
.pose-dot {
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    border: 1px solid #24798f;
    background: #24798f;
    position: absolute;
}
#video-loading{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#video-loading svg {
    animation: rotator 1.4s linear infinite;
}
@keyframes rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}
#loading-circle {
    opacity: .7;
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
    animation: circleDash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
    transform-origin: center;
}
@keyframes circleDash {
    0% {
        stroke-dashoffset: 300;
    }
    50% {
        stroke-dashoffset: 140;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 300;
        transform: rotate(450deg);
    }
}
.fullscreen-desktop{
    width: 100% !important;
}
.fullscreen-android{
    height: 100% !important;
}
.main-on-safari-mac {
    width: 100% !important;
    height: 100vh !important;
}
.main-on-safari-phone {
    width: 100vw !important;
    min-height: -webkit-fill-available !important;
}
.controls-on-safari-phone {
    width: 100% !important;
}
@media (max-width: 768px)  and (orientation: landscape) {
    .main-on-safari-phone {
        width: 100vw !important;
        height: 100vh !important;
        min-height: unset !important;
        max-height: -webkit-fill-available !important;
    }
}

@media all and ( display-mode: fullscreen ){
    #canvas1, #canvas2, #canvas3 {
        max-width: unset;
        width: 100%;
    }
}
@media (min-width: 769px) and (max-width: 850px) and (orientation: landscape) and ( display-mode: fullscreen ){
    
}
</style>