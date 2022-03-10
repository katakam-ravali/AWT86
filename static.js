class Emp{
    static display()
    {
        console.log("Hi from Parent class");
    }
}
class Emp1 extends Emp
{
display(){
console.log("Hi from Child Class");
}
}
let e1=new Emp();
Emp.display();