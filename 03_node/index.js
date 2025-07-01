const express = require("express");
const users = require('./MOCK_DATA.json');
const app = express();
const fs = require('fs');
const PORT = 3000;

app.use(express.urlencoded({extended : false}));

app.get('/api/users', (req, res) => {
    res.json(users);
});


app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req,res)=>{
        res.json({status:"pending"});
    })
    .delete((req,res)=>{

            console.log(req.params.id)
            delete users.id;
            return res.json({status : "succes"})
        }
        return res.json({status : "faild"});
    });


app.post('/api/users',(req,res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status :"success",id : users.length});
    });
    console.log(body);
})

app.listen(PORT, () => console.log("application is started"));