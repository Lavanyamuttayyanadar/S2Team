var express = require('express')
var Constants = require('../../Conts')
var router = express.Router()
var Db = require('../../Database')
//Add
router.post(Constants.Routes.AddSubAdmin.Route, async function (req, res) {
    try{
        const username = req.body.username;
        const password = req.body.password;
        //Add the record and end the response
        let Data = await Db.query("INSERT INTO users (username, password, role) VALUES ($1, $2, $3);",[username,password,"SubAdmin"])
        console.log(Data)
        Constants.ressend(Data,200,res,"Sucess")
    }
    catch(e){
        console.log(e);
        Constants.ressend({},500,res,"Error")
    }
})

//Delete
router.post(Constants.Routes.DeleteSubAdmin.Route, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    //Add the record and end the response
    Constants.ressend(req.decoded,200,res,"Sucess")
})

//Update
router.post(Constants.Routes.UpdateSubAdmin.Route, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    //Add the record and end the response
    Constants.ressend(req.decoded,200,res,"Sucess")
})

//Generate admin report

module.exports = router