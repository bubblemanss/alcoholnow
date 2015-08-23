var request = require("request");

var options = {
    url:"https://lcboapi.com/products?order=alcohol_content.desc",
    headers:{
        "Authorization":"Token "+process.env.LCBO_KEY
    },
    method:"GET"
}

request(options, function(err, data){
    if(err){
        console.log(err);
    }
    else{
        var jsonData = JSON.parse(data.body);
        console.log(jsonData.pager);
        console.log(jsonData.result);
    }
});
