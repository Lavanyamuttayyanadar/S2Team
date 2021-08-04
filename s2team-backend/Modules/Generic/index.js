const Db = require('../../Database');
const bcrypt = require('bcryptjs');
const Conts = require('../../Conts');
module.exports = {
    IsUserPresent: async function(Username){
        const result = await Db.query("SELECT * FROM users WHERE username = $1",[Username]);
        if(result.rowCount == 1)
        {
            return result.rows[0];
        }
        else
        {
            return null;
        }
    },
    verifyPassword: function(account,password){
        if(account !== null && bcrypt.compareSync(password, account.password))
            return true;
        else
            return false;
    }
}