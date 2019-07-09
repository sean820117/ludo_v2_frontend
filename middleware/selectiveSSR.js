module.export = function(req, res, next) {
    const paths = ['/comfirm']
    console.log(paths)
    // A very simple check
    if (paths.includes(req.originalUrl)) {
      // Will trigger the "traditional SPA mode"
      res.spa = true
      console.log(true)
    }
    // Don't forget to call next in all cases!
    // Otherwise, your app will be stuck forever :|
    next()
}