const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const SECRET_KEY = 'mysecretkey';

const user = {
    id : 1,
    username: 'testuser',
    password: 'password123'
};


app.post('/login',(req,res)=>{
    const{username,password} = req.body;
    if(username === user.username && password){
        const token = jwt.sign({id:user.id,username:user.username},SECRET_KEY,{expiresIn:'1h'});
        return res.json({token});
    }
    res.status(401).json({message : "Invalid credentials"});
});


function authenticationToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStaus(401);

    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err) return res.sendStaus(403);
        req.user = user;
    });
    next();
}
console.log(user);


    app.get('/protected',authenticationToken,(req,res)=>{
        res.json({
            message:`Hello, ${req.user.username}! this is protected`
        });
    });

    app.listen(3000,()=>console.log('server running on http://localhost:3000'));