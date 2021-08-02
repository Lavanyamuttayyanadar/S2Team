// index.js
const express = require('express');
const Auth = require('./middleware/Auth');
const Db = require('./Database')
const Constants = require('./Conts');
const app = express();
const jwt = require("jsonwebtoken")
const Genric = require("./Genric");
app.use(express.json());
app.use(Auth);

app.post('/Login', async (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
    //Verify Username and Password And Return jwt
    //JWt Should have the role
    let account = await Genric.IsUserPresent(Username)
    if(Genric.verifyPassword(account,Password)){
        var token = jwt.sign({ Role: 'Admin' }, Constants.Key);
        Constants.ressend(token,200,res);
    }
    else{
        Constants.ressend("Incorrect",200,res);
    }
});
const db = Constants.Database;
try{
    Db.connect({user:db.Username,host:db.Host,database:db.Database,password:db.Password,port:db.Port});
    console.log("Database connected");
}
catch(e){
    console.error(e);
}
app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));