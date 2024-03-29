// const person: { 
//   name: string, 
//   age: number, 
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'Saveliy',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// person.role.push('admin');
// person.role[2] = 10;

//  const ADMIN = 0;
//  const READ_ONLY = 1;
//  const AUTHOR = 2;

enum Role {
  ADMIN = 5, READ_ONLY = 1000, AUTHOR = 200
}

const person = {
  name: 'Saveliy123',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let number = 2.8;

if (person.role === Role.AUTHOR) {
  console.log('is author');
}