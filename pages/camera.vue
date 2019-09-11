<template>
    <div class="container">
        <div class="card">
        <div class="card-body">
            <div class="row mb-4">
            <div class="col-12">
                <h1 class="text-center mb-3">透過 JavaScript 打造一個視訊錄影機吧</h1>
                <p>
                這個範例示範如何透過瀏覽器內建的 MediaStream API 來打造影音錄影的功能
                <small class="text-muted">
                    （開發環境使用 Chrome 瀏覽器）
                </small>
                </p>
            </div>
            </div>

            <div class="row mb-5 justify-content-center align-items-center">
            <div class="col-md-6 text-center">
                <div class="video-container d-flex align-items-center justify-content-center">
                <div class="is-recording"></div>
                <video id="inputVideo" alt="在這裡錄影" muted>Video stream not available.</video>
                </div>
            </div>

            <div class="col-md-6 text-center">
                <div class="video-container d-flex align-items-center justify-content-center">
                <video id="outputVideo" alt="錄好的畫面將會出現在這" muted>Video stream not available.</video>
                </div>
            </div>
            </div>

            <div class="row mb-4 justify-content-center align-items-center">
            <div class="col-4 d-flex justify-content-center align-items-center">
                <button id="startBtn" class="btn btn-sm btn-outline-primary">Start Recording</button>
                <button id="stopBtn" class="btn btn-sm btn-outline-danger" style="display:none">Stop Recording</button>
                <button id="resetBtn" class="btn btn-sm btn-outline-info" style="display:none">Restart Recorder</button>
            </div>
            </div>

            <div class="row">
            <div class="col-12">
                <div role="alert" id="errorMsg"></div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        inputVideo:'',
        outputVideo:'',
        startBtn:'',
        stopBtn:'',
        resetBtn:'',
        errorElement:'',
        isRecordingIcon:'',
        chunks :[],
        mediaRecorder:'',
        inputVideoURL:'',
        outputVideoURL:'',
        constraints : {
            // audio: true,
            video: {width:480,height:320,frameRate:5}
        },
        stream:'',
    }),
    mounted() {
        if (process.client) {
            this.inputVideo = document.querySelector('#inputVideo')
            this.outputVideo = document.querySelector('#outputVideo')

            // <button> element
            this.startBtn = document.querySelector('#startBtn')
            this.stopBtn = document.querySelector('#stopBtn')
            this.resetBtn = document.querySelector('#resetBtn')

            // error message
            this.errorElement = document.querySelector('#errorMsg')

            // is-recording icon
            this.isRecordingIcon = document.querySelector('.is-recording')
            this.inputVideo.addEventListener('loadedmetadata', this.onLoadStreamSuccess)
            
            this.startBtn.addEventListener('click', this.onStartRecording)
            this.stopBtn.addEventListener('click', this.onStopRecording)
            this.resetBtn.addEventListener('click', this.onReset)
            this.mediaRecorderSetup();
        }
    },
    methods:{
        onStartRecording (e) {
            e.preventDefault()
            e.stopPropagation()
            this.isRecordingBtn('stop')
            this.mediaRecorder.start()
            console.log('mediaRecorder.start()')
        },
        onLoadStreamSuccess () {
            this.inputVideo.play()
            console.log('inputVideo on loadedmetadata')
        },
        onStopRecording (e) {
            e.preventDefault()
            e.stopPropagation()
            this.isRecordingBtn('reset')
            this.mediaRecorder.stop()
            console.log('mediaRecorder.stop()')
        },
        onReset (e) {
            e.preventDefault()
            e.stopPropagation()

            // 釋放記憶體
            URL.revokeObjectURL(inputVideoURL)
            URL.revokeObjectURL(outputVideoURL)
            this.outputVideo.src = ''
            this.outputVideo.controls = false
            this.inputVideo.src = ''

            // 重新啟動攝影機
            this.mediaRecorderSetup()
        },
        onStreamingStart(stream) {
                /**
                 * inputVideo Element
                 * 將串流的 inputVideo 設定到 <video> 上
                 **/
                // Older browsers may not have srcObject
                this.stream = stream;
                if ('srcObject' in this.inputVideo) {
                    this.inputVideo.srcObject = stream
                } else {
                    // Avoid using this in new browsers, as it is going away.
                    this.inputVideo.src = window.URL.createObjectURL(stream)
                }
                this.inputVideo.controls = false

                /**
                 * 透過 MediaRecorder 錄製影音串流
                 */
                // 建立 MediaRecorder 準備錄影
                // 如果沒有指定 mimeType，錄下來的 webm 影片在 Firefox 上可能不能看（Firefox 也不支援 h264)
                this.mediaRecorder = new MediaRecorder(stream, {
                    mimeType: 'video/mp4'
                })

                /* MediaRecorder EventHandler */
                this.mediaRecorder.addEventListener(
                    'dataavailable',
                    this.mediaRecorderOnDataAvailable
                ) // 有資料傳入時觸發
                this.mediaRecorder.addEventListener('stop', this.mediaRecorderOnStop) // 停止錄影時觸發                
        },
        mediaRecorderSetup () {
            // 設定顯示的按鍵
            this.isRecordingBtn('start')

            // mediaDevices.getUserMedia() 取得使用者媒體影音檔
            navigator.mediaDevices
                .getUserMedia(this.constraints)
                .then(this.onStreamingStart)
                .catch(this.onRecordError)
        },
        onRecordError(error) {
            if (error.name === 'ConstraintNotSatisfiedError') {
                this.errorMsg(
                'The resolution ' +
                    this.constraints.video.width.exact +
                    'x' +
                    this.constraints.video.width.exact +
                    ' px is not supported by your device.'
                )
            } else if (error.name === 'PermissionDeniedError') {
                this.errorMsg('Permissions have not been granted to use your media devices')
            }
            this.errorMsg('getUserMedia error: ' + error.name, error)
        },
        mediaRecorderOnStop (e) {
            console.log('mediaRecorder on stop')
            this.outputVideo.controls = true
            var blob = new Blob(this.chunks, { type: 'video/webm' })
            this.chunks = []
            this.outputVideoURL = URL.createObjectURL(blob)
            this.outputVideo.src = this.outputVideoURL

            // saveData(outputVideoURL)

            // 停止所有的輸入或輸出的串流裝置（例如，關攝影機）
            this.stream.getTracks().forEach(function (track) {
                track.stop()    
            })
        },
        mediaRecorderOnDataAvailable (e) {
            console.log('mediaRecorder on dataavailable', e.data)
            this.chunks.push(e.data)
        },
        isRecordingBtn (recordBtnState) {
            this.startBtn.style.display = 'none'
            this.stopBtn.style.display = 'none'
            this.resetBtn.style.display = 'none'
            this.isRecordingIcon.style.display = 'none'
            switch (recordBtnState) {
                case 'start':
                    this.startBtn.style.display = 'block' // show startBtn
                    break
                case 'stop':
                    this.stopBtn.style.display = 'block' // show stopBtn
                    this.isRecordingIcon.style.display = 'block'
                    break
                case 'reset':
                    this.resetBtn.style.display = 'block' // show resetBtn
                    break
                default:
                    console.warn('isRecordingBtn error')
            }
        },
        errorMsg (msg, error) {
            console.log('errorElement', this.errorElement)
            this.errorElement.classList.add('alert', 'alert-warning')
            this.errorElement.innerHTML += msg
            if (typeof error !== 'undefined') {
                console.error(error)
            }
        },
        saveData (dataURL) {
            var fileName = 'my-download-' + Date.now() + '.webm'
            var a = document.createElement('a')
            document.body.appendChild(a)
            a.style = 'display: none'
            a.href = dataURL
            a.download = fileName
            a.click()
        }
    },
}
</script>

<style>

</style>