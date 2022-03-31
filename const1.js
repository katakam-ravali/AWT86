const c={type:"Innova",model:500,color:"white"};
console.log(c.type);
console.log("Before modification ",c.color);
c.color="red";
console.log("After modification ",c.color);
c.owner="ABC";
console.log(c);