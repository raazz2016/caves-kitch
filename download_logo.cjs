const fs = require('fs');
const https = require('https');

https.get('https://i.ibb.co/jvNpmgdC/Remove-the-background-and-give-me-a-png-logo-image-delpmaspu.jpg', (res) => {
  const chunks = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    // Check first few pixels or just save it and we can use a tool
    fs.writeFileSync('logo.jpg', buffer);
    console.log('Saved logo.jpg, size:', buffer.length);
  });
});
