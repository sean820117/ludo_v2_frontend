
import Vue from 'vue'


{/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-744113367"></script> */}
if (process.client) {
    this.options.head.script.push({
        src: `https://www.googletagmanager.com/gtag/js?id=AW-744113367`,
        async: true
    });
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-744113367');
    Vue.prototype.$gtagVictor = gtag();
    console.log("ga victor");
}

