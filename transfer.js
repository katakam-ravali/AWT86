import { getBranch,setBranch,getEmpId,setEmpId } from "./employee.js";
console.log("Branch Before modification "+getBranch());
setBranch("Siddipet");
console.log("Branch After modification "+getBranch());
console.log("EmoId Before modification "+getEmpId());
setEmpId(1200);
console.log("EmpId After modification "+getEmpId());
