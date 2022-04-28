var file=require('fs');
file.readFile('awt86.txt',function(error,data)
{
    console.log(data.toString());
})
file.writeFile('awt86.txt',"Hello This is 86",function(error,data)
{
    console.log("Data is inserted");
})
file.appendFile('awt86.txt',"From CVR college",function(error,data)
{
    console.log("Data appended");
})
file.rename('awt86.txt','awt.txt',function(error,data)
{
    console.log("File renamed");
 })
// file.unlink('awt.txt',function(error,data)
// {
//     console.log("File removed");
// })