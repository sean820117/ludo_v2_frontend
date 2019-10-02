function setZendesk(setting_obj) {
    window.zESettings = setting_obj;
}

function hideZendesk() {
    if (zE) {
        zE.hide();
    }
}

function showZendesk() {
    if (zE) {
        zE.show();
    }
}


export default ({ app }, inject) => {
    inject('setZendesk', setZendesk);
    inject('hideZendesk', hideZendesk);
    inject('showZendesk', showZendesk);
}