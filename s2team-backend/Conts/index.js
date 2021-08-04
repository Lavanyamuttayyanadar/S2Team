module.exports = {
    Routes:{
        Login:{"Route":"/Login","Permission":"None"},
        Admin:{"Route":"/Admin","Permission":"Admin"},
        SubAdmin:{"Route":"/SubAdmin","Permission":"SubAdmin"},
        AddSubAdmin:{"Route":"/AddSubAdmin","Permission":"Admin"},
        UpdateSubAdmin:{"Route":"/UpdateSubAdmin","Permission":"Admin"},
        DeleteSubAdmin:{"Route":"/DeleteSubAdmin","Permission":"Admin"},
        GetRecords:{"Route":"/GetRecords","Permission":"SubAdmin"},
        UpdateRecords:{"Route":"/UpdateRecords","Permission":"SubAdmin"},
    },
    Database:{
        "Username":"postgres",
        "Password":"postgres",
        "Port":"5432",
        "Host":"localhost",
        "Database":"S2Admin"
    },
    UsersTable:"Users",
    Key:"skajnxnjj&6a5ahhsh09",
    ressend:function(Data,StatusCode,res,Status){
        res.status(StatusCode).send(JSON.stringify({Data:Data,Status:Status,StatusCode:StatusCode})).end();
    },
    SaltRounds:10
}