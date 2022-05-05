var express=require('express')
var app=express()
var fs=require('fs')
app.use(express.json())
app.get('/student',function(req,res)
{
    fs.readFile('Students.json',function(err,data)
    {
        res.send(data);
    })
})
app.get('/stud',(req,res)=>
{
    let myr=fs.createReadStream(__dirname+"/hello.html",'utf-8')
    myr.pipe(res);
})
app.post('/addstudent',(req,res)=>
{
    console.log(req.body)
    const newstd = {
        name:req.body.name,
        id:req.body.id,
        loc:req.body.loc
    }
    fs.readFile('Students.json',function(err,data)
    {
       var sdata=JSON.parse(data);
       sdata.push(newstd);
       fs.writeFile('Students.json',JSON.stringify(sdata),function(err,data)
       {
           console.log("data inserted");
       })
    })
    res.send("Student data inserted");
});
app.put('/studentupdate/:id',(req,res)=>
{
    var id=req.body.id;
    fs.readFile('Students.json',function(err,data){
        var sdata=JSON.parse(data);
        for(let i in sdata)
        {
            if(id==sdata[i]['id'])
            {
                sdata[i]['id']=req.body.id;
                sdata[i]['name']=req.body.name;
                sdata[i]['loc']=req.body.loc;
                fs.writeFile('Students.json',JSON.stringify(sdata),function(err,data){
                        console.log("data updated");
                })
            }
        }
        res.send("Student data updated");
    })
})
app.delete('/deletestudent/:id',(req,res)=>
{
    var id=req.body.id;
    fs.readFile('Students.json',function(err,data)
    {
        var sdata=JSON.parse(data);
        for(let i in sdata)
        {
            if(id==sdata[i]['id'])
            {
                sdata.splice(i,1);
                fs.writeFile('Students.json',JSON.stringify(sdata),function(err,data)
                {
                    console.log("data deleted");
                })
            }
        }
        res.send("Student data deleted");
})
})
app.listen(1286,function()
{
    console.log("Server started")
})