module.exports = (req, res, next) => {
    try {
        if(req.body.uname == "roushan" && req.body.pass == "raja") {
            console.log("Authentication Successful");
            next();
        } else {
            throw Error("Auth Failed");
        }
    } catch (e) {
        return res.json({ success: false, error: e });
    }
};