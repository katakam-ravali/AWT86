let ename="Sameer";
let branch="Hyderabad";
let empid="1286";
let getEname=function()
{
    return ename;
}
let getBranch=function()
{
    return branch;
}
let getEmpId=function()
{
    return empid;
}
let setBranch=function(newBranch)
{
    branch=newBranch;
}
let setEname=function(newEname)
{
    ename=newEname;
}
let setEmpId=function(newId)
{
    empid=newId;
}
export {getBranch,setBranch,getEmpId,setEmpId}