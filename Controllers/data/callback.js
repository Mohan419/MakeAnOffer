var makeanoffer =require ('./insert');
var callbackdata={
makeanoffercallback:(params,configfiles,headers,req,callback)=>{
makeanoffer.makeanofferinsert(params,configfiles,headers,req,callback)
}
}
module.exports = callbackdata;