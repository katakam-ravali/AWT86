class Employee{
    constructor(ename,eid)
    {
        this.ename=ename;
        this.eid=eid;
    }
    display()
    {
        console.log("Employee Details Using Constructor with Arguments");
        console.log("Name "+this.ename);
        console.log("Eid "+this.eid);
    }
}
let e1=new Employee("ABC",122);
e1.display();