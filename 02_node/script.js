const express = require('express');

const conn = require('./db');

const app = express();
app.use(express.json());

app.post('/users',(req,res)=>{
  const {name,email}= req.body;
  conn.query('INSERT INTO users (name,email) VALUES(?,?)',[name,email],(error,result)=>{
    if(error) return res.status(500).send(error);
    res.send('User added! ');
  }); 
});

app.get('/users',(req,res)=>{
  conn.query('SELECT * FROM users',(err,result)=>{
    if(err) return res.status(500).send(err);
    res.json(result);
  });
});

app.put('/users/:id',(req,res)=>{
  const {name,email} = req.body;
  console.log('Received PUT request for ID:', req.params.id);
  conn.query('UPDATE users SET name = ?, email = ? where id = ?',[name,email,req.params.id],(err)=>{
    if(err) return res.status(500).send(err);
    res.send('User updated!');
  });
});

app.delete('/users/:id',(req,res)=>{
  conn.query('DELETE FROM users WHERE id = ?',[req.params.id],(err)=>{
    if(err) return res.status(500).send(err);
    res.send('User deleted!');
  });
});

app.listen(3000,()=>console.log('Server is runnig on port 3000'));