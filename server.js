"use strict";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const express = require('express');
const app  = express();
const bodyParser = require('body-parser');

const oauth2Client = new OAuth2(
     process.env.GMAIL_CLIENT_ID,
     process.env.GMAIL_CLIENT_SECRET,
     "https://developers.google.com/oauthplayground"
);


oauth2Client.setCredentials({
     refresh_token: process.env.GMAIL_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();



app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());


app.post('/sendEmail', (req, res) => {



  console.log(req.body, 'data of form');
  
let transporter = nodemailer.createTransport({
 service: 'gmail',
    host: "smtp.gmail.com",

    secure: true, 
port: 465,
    auth: {
      type: 'oauth2',

      user: 'desarrollo@daxosline.com.co',
      clientId: process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN,
                accessToken: accessToken
    },
  });
  const currentYear = new Date().getFullYear();

var mailOptions = {
    from:  '" Daxos " <desarrollo@daxosline.com.co>',
    to: `${req.body.email}`, 
    cc:`info@esourcecapital.com`,
    subject: 'Nuevo contacto agregado en eSource',
    attachments: [{
       filename: 'esc-logo.png',
       path: __dirname +'/img/esc-logo.png',
       cid: 'unique@nodemailer.com' 
   }],
    html: `
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
<style type="text/css">
   html {
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
   }

   @media only screen and (min-device-width: 750px) {
      .table750 {
         width: 750px !important;
      }
   }

   @media only screen and (max-device-width: 750px),
   only screen and (max-width: 750px) {
      table[class="table750"] {
         width: 100% !important;
      }

      .mob_b {
         width: 93% !important;
         max-width: 93% !important;
         min-width: 93% !important;
      }

      .mob_b1 {
         width: 100% !important;
         max-width: 100% !important;
         min-width: 100% !important;
      }

      .mob_left {
         text-align: left !important;
      }

      .mob_soc {
         width: 50% !important;
         max-width: 50% !important;
         min-width: 50% !important;
      }

      .mob_menu {
         width: 50% !important;
         max-width: 50% !important;
         min-width: 50% !important;
         box-shadow: inset -1px -1px 0 0 rgba(255, 255, 255, 0.2);
      }

      .mob_center {
         text-align: center !important;
      }

      .top_pad {
         height: 15px !important;
         max-height: 15px !important;
         min-height: 15px !important;
      }

      .mob_pad {
         width: 15px !important;
         max-width: 15px !important;
         min-width: 15px !important;
      }

      .mob_div {
         display: block !important;
      }
   }

   @media only screen and (max-device-width: 550px),
   only screen and (max-width: 550px) {
      .mod_div {
         display: block !important;
      }
   }

   .table750 {
      width: 750px;
   }
</style>
<table cellpadding="0" cellspacing="0" border="0" width="100%"
   style="background: #f3f3f3; min-width: 350px; font-size: 1px; line-height: normal;">
   <tr>
      <td align="center" valign="top">
         <!--[if (gte mso 9)|(IE)]>
         <table border="0" cellspacing="0" cellpadding="0">
         <tr><td align="center" valign="top" width="750"><![endif]-->
         <table cellpadding="0" cellspacing="0" border="0" width="750" class="table750"
            style="width: 100%; max-width: 750px; min-width: 350px; background: #f3f3f3;">
            <tr>
               <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
               <td align="center" valign="top" style="background: #ffffff;">

                  <table cellpadding="0" cellspacing="0" border="0" width="100%"
                     style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f3f3f3;">
                     <tr>
                        <td align="right" valign="top">
                           <div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div>
                        </td>
                     </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="88%"
                     style="width: 88% !important; min-width: 88%; max-width: 88%;">
                     <tr>
                        <td align="left" valign="top">
                           <div style="height: 39px; line-height: 39px; font-size: 37px;">&nbsp;</div>
                           <a href="#" target="_blank" style="display: block; max-width: 128px;">
                              <img src="cid:unique@nodemailer.com" alt="img" width="128" border="0"
                                 style="display: block; width: 128px;" />
                           </a>
                           <br/>
                           <div style="height: 73px; line-height: 73px; font-size: 71px;" align="center"> <span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color:
                               #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Nuevo Contacto desde ${req.body.provenienteDe}</span></div>
                        </td>
                     </tr>
                  </table>

                  <table cellpadding="0" cellspacing="0" border="0" width="88%"
                     style="width: 88% !important; min-width: 88%; max-width: 88%;">
                     <tr>
                        <td align="left" valign="top"><span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Nombre</span>
                        </td>
                        <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">${req.body.nombre}</font>
                        </td>
                     </tr>
                     <tr>
                        <td align="left" valign="top">
                           <span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Email</span>
                        </td>
                        <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">${req.body.email}</font>

                        </td>
                     </tr>
                   <!--  <tr>
                        <td align="left" valign="top"><span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Trends</span>
                        </td>
                        <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; "></font>
                        </td>
                     </tr>-->
                     <tr>
                        <td align="left" valign="top">
                           <span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Tel&eacute;fono</span>
                        </td>
                        <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">${req.body.telefono}</font>
                        </td>
                     </tr>
                     <tr>
                        <td align="left" valign="top"><span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">No.
                              de empleados</span>
                        </td>
                        <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">${req.body.no_empleados}</font>
                        </td>
                     </tr>
                     <tr>
                        <td><span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Pa&iacute;s</span>
                        </td>
                        <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">${req.body.pais}</font>
                        </td>
 
                     </tr>
<tr>
<td><span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Empresa</span>
                        </td>
 <td valign="top">
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">${req.body.empresa}</font>
                        </td>
</tr>

                     <tr>
                        <td>
                           <span
                              style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 19px; line-height: 23px; font-weight: 600;">Mensaje</span>

                        </td>
                                 <td>
                           <font face="'Source Sans Pro', sans-serif" color="#000000"
                              style="font-size: 19px; line-height: 23px; ">
                              ${req.body.mensaje}
                           </font>
                        </td>
                     </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="88%"
                     style="width: 88% !important; min-width: 88%; max-width: 88%;">
                     <tr>
                        <td align="center" valign="top">
                           <!--[if (gte mso 9)|(IE)]>
                                                 <table border="0" cellspacing="0" cellpadding="0">
                                                 <tr><td align="center" valign="top" width="50"><![endif]-->
                           <div style="display: inline-block; vertical-align: top; width: 50px;">

                           </div>
                           <!--[if (gte mso 9)|(IE)]></td><td align="left" valign="top" width="390"><![endif]-->
                           <div class="mob_div"
                              style="display: inline-block; vertical-align: top; width: 62%; min-width: 260px;">
                              <table cellpadding="0" cellspacing="0" border="0" width="100%"
                                 style="width: 100% !important; min-width: 100%; max-width: 100%;">
                                 <tr>
                                    <td width="18" style="width: 18px; max-width: 18px; min-width: 18px;">&nbsp;</td>
                                    <td class="mob_center" align="left" valign="top">
                                       <div style="height: 13px; line-height: 13px; font-size: 11px;">&nbsp;</div>

                                       <div style="height: 1px; line-height: 1px; font-size: 1px;">&nbsp;</div>

                                    </td>
                                    <td width="18" style="width: 18px; max-width: 18px; min-width: 18px;">&nbsp;</td>
                                 </tr>
                              </table>
                           </div>
                           <!--[if (gte mso 9)|(IE)]></td><td align="left" valign="top" width="177"><![endif]-->
                           <div style="display: inline-block; vertical-align: top; width: 177px;">

                           </div>
                           <!--[if (gte mso 9)|(IE)]>
                                                 </td></tr>
                                                 </table><![endif]-->
                           <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                        </td>
                     </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="100%"
                     style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f3f3f3;">
                     <tr>
                        <td align="center" valign="top">
                           <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div>
                           <table cellpadding="0" cellspacing="0" border="0" width="88%"
                              style="width: 88% !important; min-width: 88%; max-width: 88%;">
                              <tr>
                                 <td align="center" valign="top">

                                    <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div>
                                    <font face="'Source Sans Pro', sans-serif" color="#868686"
                                       style="font-size: 17px; line-height: 20px;">
                                       <span
                                          style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #868686; font-size: 17px; line-height: 20px;">Todos los derechos reservados para eSource Capital &copy;${currentYear}.</span>
                                    </font>
                                    <div style="height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</div>
                                    <font face="'Source Sans Pro', sans-serif" color="#1a1a1a"
                                       style="font-size: 17px; line-height: 20px;">
                                       <span
                                          style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px;"><a
                                             href="#" target="_blank"
                                             style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">info@esourcecapital.com</a>&nbsp;&nbsp;</span>
                                    </font>
                                    <div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div>
                                    <!--<table cellpadding="0" cellspacing="0" border="0">
                                                             <tr>
                                                                <td align="center" valign="top">
                                                                   <a href="#" target="_blank" style="display: block; max-width: 19px;">
                                                                      <img src="img/soc_1.png" alt="img" width="19" border="0" style="display: block; width: 19px;" />
                                                                   </a>
                                                                </td>
                                                                <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                                                                <td align="center" valign="top">
                                                                   <a href="#" target="_blank" style="display: block; max-width: 18px;">
                                                                      <img src="img/soc_2.png" alt="img" width="18" border="0" style="display: block; width: 18px;" />
                                                                   </a>
                                                                </td>
                                                                <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                                                                <td align="center" valign="top">
                                                                   <a href="#" target="_blank" style="display: block; max-width: 21px;">
                                                                      <img src="img/soc_3.png" alt="img" width="21" border="0" style="display: block; width: 21px;" />
                                                                   </a>
                                                                </td>
                                                                <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                                                                <td align="center" valign="top">
                                                                   <a href="#" target="_blank" style="display: block; max-width: 25px;">
                                                                      <img src="img/soc_4.png" alt="img" width="25" border="0" style="display: block; width: 25px;" />
                                                                   </a>
                                                                </td>
                                                             </tr>
                                                          </table>-->
                                    <div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>

               </td>
               <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
            </tr>
         </table>
      </td>
   </tr>
</table>`
  };

 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!'
      });
    }
  });

});

app.listen(3000, () => {
  console.log("server run!!!");
});
