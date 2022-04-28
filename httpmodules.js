var http=require('http')
var server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
    res.write("<h1>Hi this is 86 from IT-B</h1>");
    res.end();
    }
    if(req.url=='/itb')
    {
    res.write("<h1>Hi we are IT-B students</h1>");
    res.end();
    }
})
server.listen(1286,function(err,data)
{
    console.log("Server started")
});


