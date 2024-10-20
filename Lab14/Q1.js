"use strict";
function describePerson(person) {
    const studentStatus = person.isStudent ? "is a student" : "is not a student";
    return `${person.name} is ${person.age} years old and ${studentStatus}.`;
}
// Example usage:
const person = { name: "John", age: 25, isStudent: true };
console.log(describePerson(person));
// Output: "John is 25 years old and is a student."
