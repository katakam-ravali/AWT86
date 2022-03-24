function* add()
{
    yield 20;
    console.log("Welcome");
    console.log("CVR college");
    yield 10;
    yield 40;
}
var a=add();
console.log("Hi");
console.log(a.next());
console.log("IT Department");
console.log(a.next());
console.log("Of engineering");
console.log(a.next());