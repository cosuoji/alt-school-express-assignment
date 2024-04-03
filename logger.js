const logger = (req, res, next) =>{
    console.log("URL", req.url, "Method", req.method, "Time", new Date())
    console.log("Body", req.body)
    console.log("Query", req.query)
    console.log("Params", req.params)

    next();
}

module.exports = logger