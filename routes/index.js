// Load all the required modules
var express = require('express');
var fs = require('fs');
var path = require('path');

var router = express.Router();

// Setting the relative path of the json file
var filePath = path.join(__dirname, '..', 'company.json');

// Listening to the get request
router.get('/', function(request, response){
    // reading json file asynchronously
    fs.readFile(filePath, 'utf-8', function(error, data){
        var result = JSON.parse(data); // parsing the result into object
        var context = {
            "name": result.name,
            "type": result.type,
            "founded": result.founded,
            "founder": result.founder,
            "headquarter": result.headquarter,
            "total_employees": result.total_employees,
            "revenue": result.revenue,
            "areas_served": result.areas_served
        };
        // render the index file and passing the values
        response.render('index.jade', context);
    });
});

// exporting router object
module.exports = router;