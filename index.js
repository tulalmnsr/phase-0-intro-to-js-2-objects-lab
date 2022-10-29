// Write your solution in this file!
const employee={
    name:"Batoul",
    streetAddress : "Saida",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name="Sam"
    employee.streetAddress="12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, key){
 const newObj = { ...employee};
 delete newObj.name
 return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}
