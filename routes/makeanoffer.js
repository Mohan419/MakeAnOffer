var express = require ('express');
var app = express.Router();
var makeanoffer = require ('../Controllers/data/callback');
var uploadfile = require('express-fileupload');
app.use(uploadfile({
    limits:{filesize:50*1024*1024}
}))
app.post('/api/insert',(req,res)=>{
    if(typeof req.body === 'undefined'){
        res.json({result:'0',message:'no request content'});
    }else{
        var insertdata = JSON.parse(req.body.datapass);
        makeanoffer.makeanoffercallback(insertdata,req.files,req.headers,req,result=>{
            if(result.status === 400){
                res.statusCode = result.status;
                res.send(result.data);
                return;
            }
            res.json(result.data);
        })
    }
})
module.exports = app;
