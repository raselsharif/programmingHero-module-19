const student = {
    name: "Rasel Sharif",
    id:"1771",
    department: "IT",
    address: "Badda",
}

student.department="Accounts";

// console.log(student.name);
// console.log(student.id);
// console.log(student.department);
// console.log(student.address);

// console.log(student["name"]);

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(student);

let objectKeys = Object.keys(student);
console.log(objectKeys);

let objectValues = Object.values(student);
console.log(objectValues);

// objectKeys.push("plot");
// console.log(objectKeys);

// for(var i = 0 ; i< objectKeys.length; i++){
//     console.log(objectKeys[i]);
// }

student.name="Rasel Sharif 01";
student["name"]="Rasel Sharif 02";
console.log(student);