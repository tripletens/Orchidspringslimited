const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const { Console } = require('console');
const env = require ('dotenv'). config();
const nodemailer = require ('nodemailer');
const router = express.Router();


const app = express();
const PORT = process.env.PORT || 3000;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
  router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  });
  
  router.get('/service',function(req,res){
    res.sendFile(path.join(__dirname+'/service.html'));
  });
  
  router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });

  //add the router
  app.use('/', router);
  app.listen(process.env.port || 3000);
  
  console.log('Running at Port 3000');


   app.use(express.static(path.join(__dirname, 'css'))) //for linking css, js and other files by just adding the folder name containing the files and changing the name linked to the html to just the file name hwithouth adding the
   app.use(express.static(path.join(__dirname, 'font')))
   app.use(express.static(path.join(__dirname, 'js')))
   app.use(express.static(path.join(__dirname, 'realimg')))

   //parse application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
   app.use(bodyParser.json())

app.post('/contact', (req, res) => {
    
            "use strict";

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
     

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail', // true for 465, false for other ports
            auth: {
            user: process.env.GMAIL_EMAIL, // generated ethereal user
            pass: process.env.GMAIL_PASS, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: req.body.user_mail, // sender address
            to: "mfonidongesit321@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: req.body.user_message, // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }

        main().catch(console.error);
res.end('your message has been successfully sent!')
}) 