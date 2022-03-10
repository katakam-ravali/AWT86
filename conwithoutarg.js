class employee{
    constructor()
    {
        this.ename="ABC";
        this.empid="1234";
        this.branch="Hyd";
    }
    display()
    {
        console.log("Employee Details");
        console.log("Employee Name "+this.ename);
        console.log("Employee Id "+this.empid);
        console.log("Employee Branch "+this.branch);
    }
}
let emp=new employee();
emp.display();