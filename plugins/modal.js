import VModal from 'vue-js-modal'
import Vue from 'vue';
Vue.use(VModal,{ 
    dialog: true , 
    dynamic: true,
    dynamicDefaults: { clickToClose: false } ,
    injectModalsContainer: true,
});