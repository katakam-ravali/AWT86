class Person
{
    constructor(name)
    {
        this.name=name;
    }
    display()
    {
        console.log("This is Person class");
        console.log("Name in Parent class "+this.name);
    }
}
class Students extends Person{
    constructor(name,rollno)
    {
        super(name);
        this.rollno=rollno;
    }
    display1()
    {
        console.log("This is Child class");
    }
}
let p1=new Students("DEF","456");
p1.display();
p1.display1();