async function videoRecorder (element,position = "center") {
    if (process.client) {
        
    }
}

export default ({ app }, inject) => {
    inject('videoRecorder', videoRecorder);
}