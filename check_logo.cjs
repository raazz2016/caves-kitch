const fs = require('fs');
const Jimp = require('jimp');

Jimp.read('logo.jpg').then(image => {
  const color = image.getPixelColor(0, 0);
  const rgba = Jimp.intToRGBA(color);
  console.log('Top-left pixel:', rgba);
  
  // Check center pixel
  const centerColor = image.getPixelColor(image.bitmap.width / 2, image.bitmap.height / 2);
  const centerRgba = Jimp.intToRGBA(centerColor);
  console.log('Center pixel:', centerRgba);
}).catch(err => {
  console.error(err);
});
