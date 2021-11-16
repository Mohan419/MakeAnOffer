var mongoose = require ('mongoose');
var dbconnection = require ('./dbconnect');
var schema = mongoose.Schema;
var makeanofferdata = new schema({
    addlogo:{
        type:String,
        required:true
    },
    addbankaccount:{
        type:Number,
        required:true
    },
    addaddress:{
        type:Object,
        required:true
    },
    addcomapanydetails:{
        type:Object,
        required:true
    },
    addmobileNumber:{
        type:Array,
        required:true
    },




})
dbconnection.connectToDB();
module.exports = mongoose.model('offerdata',makeanofferdata);