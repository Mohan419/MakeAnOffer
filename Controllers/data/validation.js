var joi = require ('@hapi/joi')
var infovalidate={
validationdata:(params)=>{
    const data = joi.object({
        addbankaccount:joi.number().required(),
        addaddress:joi.object().required(),
        addcomapanydetails:joi.object().required(),
        addmobileNumber:joi.array().required()


    })
    return data.validate(params);
}
}
module.exports = infovalidate;
