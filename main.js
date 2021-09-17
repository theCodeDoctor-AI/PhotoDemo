import { Photo, MattedPhoto, FramedPhoto } from './photo.js';

// Demonstration
// Regular photos
var photo1 = new Photo();
console.log('First photo demonstrating the default values of empty constructor call');
console.log(photo1.toString() + '\n\n');

var photo2 = new Photo(10, 12);
console.log('Second photo called with medium size parameters');
console.log(photo2.toString() + '\n\n');

var photo3 = new Photo(4, 20);
console.log('Second photo called with unusual dimensions to test the "other" size category');
console.log(photo3.toString() + '\n\n');

// Matte photos
var mattePhoto1 = new MattedPhoto('black');
console.log('First matte photo call with black as color and default width and length');
console.log(mattePhoto1.toString() + '\n\n');

var mattePhoto2 = new MattedPhoto('black', 14, 12);
console.log('Second matte photo call with black as color and unusual width and length');
console.log(mattePhoto2.toString() + '\n\n');

// Framed photos
var framedPhoto1 = new FramedPhoto('Finished Wood', 'Antique', 10, 12);
console.log('First Framed photo call medium size width and length');
console.log(framedPhoto1.toString() + '\n\n');

var framedPhoto2 = new FramedPhoto('Polished Silver', 'Minimalistic', 14, 12);
console.log('Second framed photo call with unusual width and length');
console.log(framedPhoto2.toString() + '\n\n');