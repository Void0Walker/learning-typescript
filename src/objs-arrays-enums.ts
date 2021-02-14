// let favHobbies: string[] = ["Sports", "Gaming "];
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: [number, string?];
  role: number;
} = { name: "Arturas", age: 27, hobbies: [1], role: Role.ADMIN };

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person);
