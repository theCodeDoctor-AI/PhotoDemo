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
export class Photo {
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

export class MattedPhoto extends Photo {
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

export class FramedPhoto extends Photo {
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

