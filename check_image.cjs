const https = require('https');

https.get('https://i.ibb.co/jvNpmgdC/Remove-the-background-and-give-me-a-png-logo-image-delpmaspu.jpg', (res) => {
  console.log('Content-Type:', res.headers['content-type']);
});
