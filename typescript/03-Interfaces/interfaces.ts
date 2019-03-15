// Interfaces allow us to create contracts other classes/ objects have to implement
// We can use them to define custom types without creating classes
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by our TypeScript compiler

// Example interface

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

//here are creating just blueprint of User. In that case we don't need to implemment the interface or
// initialize and interface.
// User is just a data type here
let user:User;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};

// This value does satisfy the interface
user = {username: 'max', password: 'supersecret'};
