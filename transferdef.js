import a from "./defaultemp.js";
//import { setBranch } from "./employee.js";
console.log("Branch Before Modification "+a.getBranch());
a.setBranch("Kolkatta");
console.log("Branch After Modification "+a.getBranch());
