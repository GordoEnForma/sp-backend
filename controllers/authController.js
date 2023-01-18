



const loginUser=async(req, res)=>{
    try{
        console.log("Usuario loggeado");
        res.status(200).send("Usuario loggeado");
    }catch(e){
        console.log("Error al iniciar sesión");
        res.status(400).send("Error al iniciar sesión");
    }
}

module.exports={
    loginUser
}