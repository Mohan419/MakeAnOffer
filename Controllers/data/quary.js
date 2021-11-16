var quaryschema = require ('../../model/app/schema');
var makeanofferQuary={
makeanofferinsertquary:(params,image)=>{
    var passinfo = new quaryschema({
        addlogo:image,
        addbankaccount:params.addbankaccount,
        addaddress:params.addaddress,
        addcomapanydetails:params.addcomapanydetails,
        addmobileNumber:params.addmobileNumber
    })
return passinfo;
}
}
module.exports = makeanofferQuary;