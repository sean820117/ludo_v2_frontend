async function videoRecorder () {
    if (process.client) {
        return new VideoRecorder();
    }
}

class VideoRecorder {
    constructor() {
        this.chunks = [];
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.openCamera = this.openCamera.bind(this);
        this.closeCamera = this.closeCamera.bind(this);
        this.mediaRecorderOnDataAvailable = this.mediaRecorderOnDataAvailable.bind(this);
        this.onStreamingStart = this.onStreamingStart.bind(this);
        this.onGetUserMediaError = this.onGetUserMediaError.bind(this);
        this.mediaRecorderOnStop = this.mediaRecorderOnStop.bind(this);
        this.saveData = this.saveData.bind(this);
        this.setOnRecordingFinish = this.setOnRecordingFinish.bind(this);
    }

    openCamera(constraints,realTimeVideoPlayer = null) {
        this.constraints = constraints;
        this.realTimeVideoPlayer = realTimeVideoPlayer;
        console.log(constraints);
        navigator.mediaDevices
            .getUserMedia(this.constraints)
            .then(this.onStreamingStart)
            .catch(this.onGetUserMediaError)
    }

    closeCamera() {
        // 停止所有的輸入或輸出的串流裝置（例如，關攝影機）
        this.stream.getTracks().forEach(function (track) {
            track.stop()    
        });
    }

    startRecording() {
        if (!this.stream) {
            console.error("no stream");
            return false;
        }
        this.chunks = [];
        this.mediaRecorder = new MediaRecorder(this.stream, {
            mimeType: 'video/webm;codecs=VP9'
        })
        this.mediaRecorder.addEventListener(
            'dataavailable',
            this.mediaRecorderOnDataAvailable
        ) // 有資料傳入時觸發
        this.mediaRecorder.addEventListener('stop', this.mediaRecorderOnStop) // 停止錄影時觸發                
        this.mediaRecorder.start();
    }

    stopRecording () {
        if (!this.mediaRecorder) {
            console.error("no mediaRecorder");
            return false;
        }
        this.mediaRecorder.stop()
    }

    mediaRecorderOnStop(e) {
        var blob = new Blob(this.chunks, { type: 'video/webm' })
        this.recorded_video = new File([blob], Math.random().toString(16).slice(-4)+Date.now()+ ".webm", {lastModified: Date.now()});
        this.outputVideoURL = URL.createObjectURL(blob)
        // URL.revokeObjectURL(inputVideoURL)
        // URL.revokeObjectURL(outputVideoURL)
        if (this.outputVideo) {
            this.outputVideo.controls = true
            this.outputVideo.src = this.outputVideoURL
        }
        if (this.onRecordingFinish) {
            this.onRecordingFinish(this.recorded_video);
        }
        // this.saveData()
    }

    setOnRecordingFinish(callback) {
        this.onRecordingFinish = callback;
    }

    saveData () {
        var fileName = 'my-download-' + Date.now() + '.webm'
        var a = document.createElement('a')
        document.body.appendChild(a)
        a.style = 'display: none'
        a.href = this.outputVideoURL
        a.download = fileName
        a.click()
    }

    onStreamingStart(stream) {
        this.stream = stream;
        // debugger;
        if (this.realTimeVideoPlayer) {
            console.log("play");
            if ('srcObject' in this.realTimeVideoPlayer) {
                this.realTimeVideoPlayer.srcObject = stream
            } else {
                this.realTimeVideoPlayer.src = window.URL.createObjectURL(stream)
            }
            this.realTimeVideoPlayer.play();
        }   
    }

    mediaRecorderOnDataAvailable (e) {
        console.log('mediaRecorder on dataavailable', e.data)
        // debugger;
        this.chunks.push(e.data)
    }

    onGetUserMediaError(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
            console.error(
            'The resolution ' +
                this.constraints.video.width.exact +
                'x' +
                this.constraints.video.width.exact +
                ' px is not supported by your device.'
            )
        } else if (error.name === 'PermissionDeniedError') {
            console.error('Permissions have not been granted to use your media devices')
        }
        console.error('getUserMedia error: ' + error)
    }
}

export default ({ app }, inject) => {
    inject('videoRecorder', videoRecorder);
}