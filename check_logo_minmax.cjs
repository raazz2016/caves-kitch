const sharp = require('sharp');

sharp('logo.jpg')
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    let min = 255, max = 0;
    for (let i = 0; i < data.length; i += info.channels) {
      const v = data[i]; // just check red channel
      if (v < min) min = v;
      if (v > max) max = v;
    }
    console.log('Min pixel value:', min);
    console.log('Max pixel value:', max);
  });
