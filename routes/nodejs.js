import express from 'express';

const Indexrouter = express.Router();

Indexrouter.use("/nodejs",(req,res) =>{
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")});

export default Indexrouter;