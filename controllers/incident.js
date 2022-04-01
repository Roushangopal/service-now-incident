const axios = require("axios");
exports.createIncident = async(req, res) => {
    console.log("Creating Incident....");
    console.log(req.body)
    console.log()
    severity = "3"
    impact = "3"
    urgency = "3"
    priority = "3"
    if(req.body.alertSeverity == "kCritical"){
        severity = "1"
        impact = "1"
        urgency = "1"
        priority = "1"
    }
    assignment_group = 'backup'
    short_description = `${req.body.clusterName} : ${req.body.alertDescription}`
    let requestBody = {
        "short_description": short_description,
        "description": req.body.alertCause,
        "assignment_group": assignment_group,
        "opened_by": req.body.opened_by,
        "caller_id": req.body.opened_by,
        "opened_at": new Date(),
        "urgency": urgency,
        "impact": impact,
        "priority": priority,
        "state": "1",
        "severity": severity,
        "category": "Software",
        "subcategory": "Email",
        "company": "Acc",
        "location": "Bengaluru"
    }

    axios.post(process.env.SNOW_LINK,
    requestBody,
    {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Basic " + Buffer.from(process.env.USER_ID+":"+process.env.PASSWORD).toString("base64"),
        }
    })
    .then(function (response) {
        // console.log(response.data.result);
        incident_number = response.data.result.number; 
        res.status(201).json({ success: true, 
            message: `Incident Created : ${response.data.result.number}` });
    })
    .catch(function (error) {
        res.status(500).json({ success: false, message: "Internal Server error" });
});
}