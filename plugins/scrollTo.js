async function scrollTo (element,position = "center") {
    if (process.client) {
        document.querySelector(element).scrollIntoView({
            behavior: "smooth",
            block: position,
        });
    }
}

export default ({ app }, inject) => {
    inject('scrollTo', scrollTo);
}