module.exports = (req, res, next) => {
    console.log('Authenticating')
    clusterId = [1486794073761400]
    try {
        if(clusterId.includes(parseInt(req.body.clusterId))) {
            console.log("Authentication Successful");
            next();
        } else {
            console.log('Auth Failed')
            throw Error("Auth Failed");
        }
    } catch (e) {
        return res.json({ success: false, error: e });
    }
};