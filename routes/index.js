var express = require('express');
var fs = require('fs');
var path = require('path');

var router = express.Router();

var filePath = path.join(__dirname, '..', 'company.json');

router.get('/', function(request, response){
    fs.readFile(filePath, 'utf-8', function(error, data){
        var result = JSON.parse(data);
        // console.log(typeof(result));
        // console.log(typeof(result.areas_served));
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
        response.render('index.jade', context);
    });
});

module.exports = router;