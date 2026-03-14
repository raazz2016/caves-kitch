const sharp = require('sharp');

sharp('logo.jpg')
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const top_left = [data[0], data[1], data[2]];
    const center = [
      data[(info.height / 2 | 0) * info.width * info.channels + (info.width / 2 | 0) * info.channels],
      data[(info.height / 2 | 0) * info.width * info.channels + (info.width / 2 | 0) * info.channels + 1],
      data[(info.height / 2 | 0) * info.width * info.channels + (info.width / 2 | 0) * info.channels + 2]
    ];
    console.log('Top-left pixel:', top_left);
    console.log('Center pixel:', center);
  })
  .catch(err => console.error(err));
