import express from 'express';

const greetRouter = express.Router();

greetRouter.use("/greeting",(req,res) =>{
    res.send("Hello,  Szabó Marcell")});

export default greetRouter;