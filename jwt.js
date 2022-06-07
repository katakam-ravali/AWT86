var express=require('express')
var jwt=require('jsonwebtoken')
var app=express()
app.get('/api',(req,res)=>
{
    res.json({
        message:"Welcome to API"
    })
})
app.post('/api/posts',verifyToken,(req,res)=>{
jwt.verify(req.token,'secretkey',(err,athData)=>
{
    if(err)
    {
        res.sendStatus(403)
    }
    else
    {
        res.json({
            message:"Post created...",
            athData
        })
    }
})
})
app.post('/api/login',(req,res)=>
{
    const user={
        id:1286,
        name:"Ravali",
        email:"ravali123@gmail.com"
    }
    jwt.sign({user},"secretkey",{expiresIn:'30s'},(err,token)=>
    {
        res.json({token})
    })
    // jwt.sign({user},"secretkey",(err,token)=>
    // {
    //     res.json({token})
    // })
})
function verifyToken(req,res,next)
{
    const bearerHeader=req.headers['authorization']
    if(typeof bearerHeader!=='undefined')
    {
        const bearer=bearerHeader.split(' ');
        const beararToken=bearer[1];
        req.token=beararToken;
        next();
    }
    else
    {
        res.sendStatus(403)
    }
}
app.listen(1286,()=>console.log("Server started"));