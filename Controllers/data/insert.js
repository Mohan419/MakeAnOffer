var insertvalidation = require ('./validation');
var makeanofferinsertQuary =require ('./quary');
var busboy = require('busboy');
var datainsert = {
    makeanofferinsert: (params, configfiles, headers, req, callback) => {
        const { error } = insertvalidation.validationdata(params);
        if (error) {
            return callback({
                status: 400,
                data: {
                    response: 0,
                    message: error.message
                }
            })
        }
        var busboys = new busboy({ headers: headers })
        //console.log(busboys);
        busboys.on('finish', function () {
            if (configfiles !== null) {
                var files = configfiles.logo;
                console.log(files);
                uploaddata(params, callback, files);
            } else {
                uploaddata(params, callback, null);
            }
        })
        req.pipe(busboys);
    }
}
function uploaddata(params, callback, files) {
    console.log(files);
    if (files !== null) {
        var splitData = files.name.split('.');
        console.log(splitData);
        if (splitData.length === 2) {
            var fileNameUniq = getRandomString(6);
            var image = '/images/' + fileNameUniq + "." + splitData[1];
            var imagepath = './public/images/' + fileNameUniq + "." + splitData[1];
            console.log(imagepath);
            files.mv(imagepath, (error) => {
                if (error) {
                    return callback({
                        status: 200,
                        data: {
                            response: 0,
                            message: 'File moving error'
                        }
                    })
                } else {
                    let insertQuary = makeanofferinsertQuary.makeanofferinsertquary(params,image);
                    console.log(insertQuary);
                    insertQuary.save((inserted) => {
                        console.log(inserted);
                        if (!inserted) {
                            return callback({
                                status: 200,
                                data: {
                                    response: 3,
                                    message: 'data inserted successfully'
                                }
                            })
                        } else {
                            return callback({
                                status: 200,
                                data: {
                                    response: 0,
                                    message: 'data inserted failure'
                                }
                            })
                        }
                    })
                }

            })
        } else {
            return callback({
                status: 200,
                data: {
                    response: 0,
                    message: 'Your filename dot operator is there'
                }
            })
        }
    } else {
        return callback({
            status: 200,
            data: {
                response: 0,
                message: 'Please upload file'
            }
        })
    }
}
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

module.exports = datainsert;