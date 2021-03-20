var express = require("express");
var app = express();
const csv = require('csv-parser');
const fs = require('fs');

app.listen(3000, () =>
{
    console.log("Server was running at port 3000");
});

var object = {};
var key = "";
object[key] = [];

var f = fs.readFileSync('soal.csv',{encoding: 'utf-8'},function(err){
    console.log(err);
});

//detail structure
f = f.split("\n");

headers = f.shift().split(",");

f.forEach(function(d)
{
    temp = {}
    row = d.split(",")
    for(var i = 0; i < headers.length; i++)
    {
        temp[headers[i]] = row[i];
    }

    object[key].push(temp);
})

//main structure
var data = {
    "total":headers.length,
    "results": object[key]
}

//cara menulis ke file.json
/*fs.writeFileSync('get_kuis.json',JSON.stringify(data),'utf-8',function(err)
{
    console.log(err);
})*/

//api collection
app.get("/kuis",(req,res,next) =>{
    res.json(data)
});