module.exports={
    VerifyUser:()=>{
        try{
            if(JSON.parse(localStorage.getItem("Auth")).usertype !== "Admin" && JSON.parse(localStorage.getItem("Auth")).usertype !== "SubAdmin")
            {
                alert(JSON.parse(localStorage.getItem("Auth").usertype)); 
                return false;
            }
            return true;
        }
        catch(e){ return false; }
    },
    VerifyAuthurization:()=>{
        return JSON.stringify(localStorage.getItem("Auth")).usertype
    }
}