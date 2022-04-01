module.exports = (req, res, next) => {
    clusterId = [1486794073761400]
    try {
        if(clusterId.includes(req.body.clusterId)) {
            console.log("Authentication Successful");
            next();
        } else {
            throw Error("Auth Failed");
        }
    } catch (e) {
        return res.json({ success: false, error: e });
    }
};