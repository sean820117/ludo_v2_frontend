function newLudoSocket (url,options = {}) {
    if (process.client && url != '') {
        return new LudoSocket(url,options);
    } else {
        return null;
    }
}

class LudoSocket {
    constructor(url,options = {}) {
        this.setOnReceiveData = this.setOnReceiveData.bind(this);

        let default_options = {
            reconnection : true,
        };
        this.final_options = Object.assign(default_options,options); 
        this.connect(url);
    }

    connect(url) {
        if (url) {
            this.url = url;
        }
        this.socket = new WebSocket(this.url);

        if (this.final_options.reconnection) {
            this.socket.onclose = () => {
                console.log('on close test')
                this.socket = new WebSocket(this.url);
            };
        }
        this.setOnReceiveData(this.onReceiveData);
    }

    setOnReceiveData(callback){
        this.onReceiveData = callback;
        this.socket.onmessage = (e) => {
            try {
                let data = JSON.parse(e.data);
                this.onReceiveData(data);
            } catch (error) {
                console.error('error occurs when receiving socket message' , error)
            }
        }
    }

    send(obj) {
        if (typeof obj == 'object') {
            this.socket.send(JSON.stringify(obj));
        } else {
            this.socket.send(obj);
        }
    }

    disconnect() {
        this.socket.onclose = null;
        this.socket.close();
    }
}

export default ({ app }, inject) => {
    inject('newLudoSocket', newLudoSocket);
}