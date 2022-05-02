var http=require('http')
var file=require('fs')
var server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
       file.readFile('awt1.txt',function(error,data)
        {
            console.log(data.toString())
        })
    res.write("<h1>Hi this is 86 from IT-B</h1>");
    res.end();
    }
    if(req.url=='/itb')
    {
        file.writeFile('awt2.txt',"Hello,Ravali",function(error,data)
        {
            console.log("Writing file")
        })
        res.write("<h1>This is an example of writing file</h1>");
        res.end();
    }
})
server.listen(1200,function(err,data)
{
    console.log("Server started")
});


