const User=require('../models/user');

const getUsers=async(req, res)=>{
    try{
        const users=await User.find();
        res.status(200).send({users});
    }catch(e){
        console.log("Error al obtener lista de usuarios");
        res.status(400).send("Error al obtener lista de usuarios");
    }
}
// const getUserById=asyn(req, res)=>{

// }

module.exports={
    getUsers,
}