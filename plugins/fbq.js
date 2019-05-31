/* eslint-disable */

function fbq (event,label,options = null) {
    /*
     ** Only run on client-side and only in production mode
     */
    if (process.env.NODE_ENV !== "production") return;
    /*
     ** Initialize Facebook Pixel Script
     */
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    if (!options) {
        fbq(event, label);
    } else {
        fbq(event, label, options);
    }
    // fbq("init", "YOUR_FACEBOOK_PIXEL_ID");
  
    // fbq("track", "PageView");
}

export default ({ app }, inject) => {
    inject('fbq', fbq)
}