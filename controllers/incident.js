const axios = require("axios");
exports.createIncident = async(req, res) => {
    console.log("Creating Incident....");
    let requestBody = {
        'short_description': req.body.short_description,
        'description': req.body.description,
        'assignment_group': req.body.assignment_group,
        'opened_by': req.body.opened_by,
        'caller_id': req.body.opened_by,
        'opened_at': new Date(),
        'urgency': '3',
        'impact': '3',
        'priority': '3',
        'state': '1',
        'severity': '3',
        'category': 'Software',
        'subcategory': 'Email',
        'company': 'New Look',
        'location': 'Bengaluru'
    }

    axios.post(process.env.SNOW_LINK,
    requestBody,
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(process.env.USER_ID+':'+process.env.PASSWORD).toString('base64'),
        }
    })
    .then(function (response) {
        // console.log(response.data.result);
        incident_number = response.data.result.number; 
        res.status(201).json({ success: true, 
            message: `Incident Created : ${response.data.result.number}` });
    })
    .catch(function (error) {
        // console.log("===========********========= ERROR ===========********=========", error);
        res.status(500).json({ success: false, message: "Internal Server error" });
});
}