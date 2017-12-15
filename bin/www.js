// require app object
var app = require('../app');

// setting port number to the port variable
var port = process.env.PORT || 8000;

// Listening to the port
app.listen(port, function(){
    console.log("Listening on port " + port);
});