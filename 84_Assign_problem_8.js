// Problem 8:
// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.


class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      return (`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
console.log(new Car("Toyota", "Camry", 2020));
  
  