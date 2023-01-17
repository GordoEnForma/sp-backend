



const loginUser=async(req, res)=>{
    try{

    }catch(e){
        console.log("Error al iniciar sesión");
        res.status(400).send("Error al iniciar sesión");
    }
}

module.exports={
    loginUser
}