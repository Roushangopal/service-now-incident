module.exports = (req, res, next) => {
    try {
        if(req.uname == "roushan" && req.pass == "raja") {
            next();
        } else {
            throw Error("Auth Failed")
        }
    } catch (e) {
        return res.json({ success: false, error: e });
    }
};