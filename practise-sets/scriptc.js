class complexNumber {
    constructor(a, b) {
        this._a = a
        this._b = b
    }

    createComplexNum() {
        return `${this._a} + ${this._b}i`;
    }

    set a (real) {
        this._a = real;
    }

    get a () {
        return this._a;
    }

    set b (img) {
        this._b = img;
    }

    get b () {
        return this._b;
    }
}


const n = new complexNumber(2, 3);

// const num = n.createComplexNum(2, 3)

const c = n.createComplexNum(5, 6)

console.log(c);
n.a = 5;
n.b = 6;
const d = n.createComplexNum(5, 6)
console.log(d);

// const img = n.b

// console.log(real);
// console.log(img);

// class Human {
//     constructor(name) {
//        this.name = name
//     }

//     walks() {
//         console.log('walks early in the morning');
//     }
// }

// class student extends Human {

// }


// Define the ComplexNumber class
// class ComplexNumber {
//     // Constructor to initialize the real and imaginary parts
//     constructor(real, imaginary) {
//         this.real = real;         // Set the real part
//         this.imaginary = imaginary; // Set the imaginary part
//     }

//     // Method to add two complex numbers
//     add(other) {
//         // Add the real parts and the imaginary parts separately
//         const newReal = this.real + other.real;
//         const newImaginary = this.imaginary + other.imaginary;
        
//         // Return a new ComplexNumber object with the result
//         return new ComplexNumber(newReal, newImaginary);
//     }
// }

// // Example usage
// const num1 = new ComplexNumber(3, 4);
// const num2 = new ComplexNumber(1, 2);
// const result = num1.add(num2);
// console.log(`Result: Real part: ${result.real}, Imaginary part: ${result.imaginary}`);

// // Define the ComplexNumber class
// class ComplexNumber {
//     // Constructor to initialize the real and imaginary parts
//     constructor(real, imaginary) {
//         this._real = real;          // Private property for the real part
//         this._imaginary = imaginary; // Private property for the imaginary part
//     }

//     // Getter for the real part
//     get real() {
//         return this._real;
//     }

    // // Setter for the real part
    // set real(value) {
    //     this._real = value;
    // }

    // // Getter for the imaginary part
    // get imaginary() {
    //     return this._imaginary;
    // }

    // // Setter for the imaginary part
    // set imaginary(value) {
    //     this._imaginary = value;
    // }

    // // Method to add two complex numbers
    // add(other) {
    //     const newReal = this.real + other.real;
    //     const newImaginary = this.imaginary + other.imaginary;
    //     return new ComplexNumber(newReal, newImaginary);
    // }

    // // Method to subtract two complex numbers
    // subtract(other) {
    //     const newReal = this.real - other.real;
    //     const newImaginary = this.imaginary - other.imaginary;
    //     return new ComplexNumber(newReal, newImaginary);
    // }

    // // Method to multiply two complex numbers
    // multiply(other) {
    //     const newReal = this.real * other.real - this.imaginary * other.imaginary;
    //     const newImaginary = this.real * other.imaginary + this.imaginary * other.real;
    //     return new ComplexNumber(newReal, newImaginary);
    // }

    // // Method to divide two complex numbers
    // divide(other) {
    //     const denominator = other.real * other.real + other.imaginary * other.imaginary;
    //     const newReal = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    //     const newImaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    //     return new ComplexNumber(newReal, newImaginary);
    // }

    // Method to display the complex number in the form a + bi
    // toString() {
    //     return `${this.real} + ${this.imaginary}i`;
    // }
// }

// Example usage
// const num2 = new ComplexNumber(1, 2);
// const resultAdd = num1.add(num2);
// console.log(`Addition: ${resultAdd.toString()}`);

// const resultSubtract = num1.subtract(num2);
// console.log(`Subtraction: ${resultSubtract.toString()}`);

// const resultMultiply = num1.multiply(num2);
// console.log(`Multiplication: ${resultMultiply.toString()}`);

// const resultDivide = num1.divide(num2);
// console.log(`Division: ${resultDivide.toString()}`);

// Using setters and getters
// const num1 = new ComplexNumber(3, 4);
// num1.real = 5;
// num1.imaginary = 6;
// console.log(`Updated num1: ${num1.toString()}`);
