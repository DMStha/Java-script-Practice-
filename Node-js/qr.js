// Generate QR Code for  the url on the terminal using package qrcode.

// in terminal :npm install -- save qrcode

// const QRCode = require("qrcode");

// const http = require("http");

// http
//   .createServer(async (req, res) => {
//     const url = "https://github.com/DMStha";
//     const qrData = await QRCode.toDataURL(url); //data-image.src....
//     const imgTag = "<image src = '" + qrData + "'/ >"; //<img scr = "data.image/png......./">

//     res.writeHead(200, { "Content-Type": "text/html" }); // sending html data type
//     res.write(imgTag);
//     res.end();
//   })
//   .listen(4000);
// console.log("the qr is displayed on the port 4000");
