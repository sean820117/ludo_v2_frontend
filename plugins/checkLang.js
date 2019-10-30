function checkLang(page) {
    if(process.client) {
        if(this.$i18n.locale == 'jp') {
            this.$router.push('/jp' + page)
        } else {
            this.$router.push(page)
        }
    }
}
export default ({ app }, inject) => {
    inject('checkLang', checkLang)
}
