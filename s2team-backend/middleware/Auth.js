const constants = require('../Conts/');
const keys = Object.keys(constants.Routes);
let Routepermissions = {};
keys.map((value)=>{ Routepermissions[constants.Routes[value].Route] = constants.Routes[value].Permission})
VerifyAuth = function (req, res, next) {
    if(Routepermissions[req.url] != "None")
    {

    }
    else
      next();
  }

module.exports = VerifyAuth;