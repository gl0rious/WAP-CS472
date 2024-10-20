type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

function describePerson(person: Person): string {
  const studentStatus = person.isStudent ? "is a student" : "is not a student";
  return `${person.name} is ${person.age} years old and ${studentStatus}.`;
}

// Example usage:
const person : Person = { name: "John", age: 25, isStudent: true };
console.log(describePerson(person)); 
