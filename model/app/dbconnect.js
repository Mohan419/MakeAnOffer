var mongoose = require('mongoose');

  
var dbconnemp = {
    connectToDB:()=>{
        var mongoDB = 'mongodb://127.0.0.1/MKOFFER';
        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

        //Get the default connection
        var db = mongoose.connection;

      

        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

        db.once('open',function callback(){
            console.log("Mongodb connectec ...")
        })
    }
}
    
module.exports = dbconnemp;