const axios = require("axios");
exports.createIncident = async(req, res) => {
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

    axios.post('https://dev88458.service-now.com/api/now/table/incident',
    requestBody,
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + Buffer.from('admin'+':'+'QWE0Ymf1mAkw').toString('base64'),
            // 'Authorization': 'Basic '+btoa('admin'+':'+'admin'),
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