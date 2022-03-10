class Person
{
    display()
    {
        console.log("This is Person class");
    }
}
class Students extends Person{
    display1()
    {
        console.log("This is Child class");
    }
}
let p1=new Students();
p1.display();
p1.display1();