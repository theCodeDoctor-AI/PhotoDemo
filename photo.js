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
        return `This ${this.width} by ${this.length} photo costs $${this.price()}`
    }
    
    price = () => {
        if (this.width === 8 && this.length === 10) {
            return smallPic;
        } else if (this.width === 10 && this.length === 12) {
            return mediumPic;
        } else {
            return otherSize;
        }
    }
}

class MattedPhoto extends Photo {
    constructor(color, width = 8, length = 10) {
        super(width, length);
        this.color = color;
    }

    mattePrice = () => {
        return this.price() + 10;
    }

    toString = () => {
        return `This is a ${this.width} by ${this.length} matted ${this.color} photo with a cost of $${this.mattePrice()}`;
    }
}

class FramedPhoto extends Photo {
    constructor(material, style, width = 8, length = 10) {
        super(width, length);
        this.material = material;
        this.style = style;
    }

    framedPrice = () => {
        return this.price() + 25;
    }

    toString = () => {
        return `This is a ${this.width} by ${this.length} ${this.material} framed photo. The style is ${this.style} and its cost is ${this.framedPrice()}`;
    } 
}

// Demonstration
// Regular photos
photo1 = new Photo();
console.log('First photo demonstrating the default values of empty constructor call');
console.log(photo1.toString() + '\n\n');

photo2 = new Photo(10, 12);
console.log('Second photo called with medium size parameters');
console.log(photo2.toString() + '\n\n');

photo3 = new Photo(4, 20);
console.log('Second photo called with unusual dimensions to test the "other" size category');
console.log(photo3.toString() + '\n\n');

// Matte photos
mattePhoto1 = new MattedPhoto('black');
console.log('First matte photo call with black as color and default width and length');
console.log(mattePhoto1.toString() + '\n\n');

mattePhoto2 = new MattedPhoto('black', 14, 12);
console.log('Second matte photo call with black as color and unusual width and length');
console.log(mattePhoto2.toString() + '\n\n');

// Framed photos
framedPhoto1 = new FramedPhoto('Finished Wood', 'Antique', 10, 12);
console.log('First Framed photo call medium size width and length');
console.log(framedPhoto1.toString() + '\n\n');

framedPhoto2 = new FramedPhoto('Polished Silver', 'Minimalistic', 14, 12);
console.log('Second framed photo call with unusual width and length');
console.log(framedPhoto2.toString() + '\n\n');