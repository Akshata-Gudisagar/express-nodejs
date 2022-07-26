const express = require('express');


const users = require('./users')


const server = express()

server.get('/users',(req,res)=>{
    res.send(users.getAllusers())
   
})


//post method
server.post('/users/adduser',(req,res)=>{
    console.log(req.query)
    res.send(users.adduser(req.query))
})
server.delete('/users/:id',(requset,response)=>{

        if(requset.params.id){
            let deleteUser = users.deleteuser(requset.params.id)
            if(deleteUser)
            response.status(200).send(deleteUser)
            else
               response.status(400).send(" deleted")
    
        }
        else{
         response.status(400).send("Invalide User code")
        }
    
    })
//update
server.put("/users/:id",(request,response)=>{
    const validationResult=userSchema.validate(request.body);
    if(validationResult.error){
        response.status(500).send('Invalid user');
        return;
    }
    let updateUser=users.updateUser(request.params.id,request.body);
    if(updateUser)
    response.send(updateUser);
    else
    response.status(400).send('user not updated')
})
server.listen(8004,()=>{
    console.log("Application Running........")
})