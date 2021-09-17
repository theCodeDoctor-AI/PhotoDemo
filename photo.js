/*
    Author: Mark Randall
    Date: September 17th, 2021
    Week2 class exercise
    Photo Demo
 */

// Price constants
const smallPic = 4.00
const mediumPic = 6.00
const otherSize = 10.00

// Classes
class Photo {
    constructor(width = 8, length = 10) {
        this.width = width;
        this.length = length;
    }

    toString = () => {
        return `This ${this.width} by ${this.length} photo costs ${this.price()}`
    }
    
    price = () => {
        if (this.width === 8 && this.length === 10) {
            return '$' + smallPic;
        } else if (this.width === 10 && this.length === 12) {
            return '$' + mediumPic;
        } else {
            return '$' + otherSize;
        }
    }
}

// Demonstration
photo1 = new Photo();
console.log('First photo demonstrating the default values of empty constructor call');
console.log(photo1.toString() + '\n\n');

photo2 = new Photo(10, 12);
console.log('Second photo called with medium size parameters');
console.log(photo2.toString() + '\n\n');

photo3 = new Photo(4, 20);
console.log('Second photo called with abnormal dimensions to test the "other" size category');
console.log(photo3.toString() + '\n\n');
