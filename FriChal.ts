// 1. Create a class for a person that has properties for the person's name, age, and address.
// 2. The class should have a method that takes a string as an argument and returns the person's
//    name and address concatenated together.
// 3. Use type annotations for the properties and method, and make sure to catch any errors that
//    may occur when calling the method.

// Created Class Person Property
class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //Created a couple of Methods for Person Class
  nameAgeAddress(): string {
    try {
      return `Hello, my name is ${this.name}. I am ${this.age} years old and my address is ${this.address}`;
    } catch (error) {
      return `Error: Could not return a name, age, or and address.`;
    }
  }
  namePlusAddress(): string {
    try {
      return `My name is ${this.name} and I work at ${this.address}`;
    } catch (error) {
      return `Error: Could not retrieve name and/or address.`;
    }
  }
}

let p1 = new Person("Ray T", 21, "1723 Mallard Creek St.");
let p2 = new Person("Ralph W", 23, "1101 Red Ventures Ave.");

console.log(p1.nameAgeAddress());
console.log(p2.namePlusAddress());
