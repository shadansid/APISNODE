const connection = require('../../Connection')
const axios  = require('axios');

const HomeEmailValidation =  (req, res)=>{
    
    let code = Math.floor(100000 + Math.random() * 900000)

    console.log("Inside Home valida")


//     connection.query(`SELECT * FROM validatemail WHERE userid = "${req.token.userid}"`, (err, result) => {
    

//         if (result.length) {
                

//             connection.query(`UPDATE  validatemail SET code="${code}" WHERE  userid="${req.body.userid}"`, (err, result2) => {

//                 console.log("UPDATED the Value and Send the Code");
//                 sendMail();


                




// })






//         } else {
            
//             connection.query(`INSERT INTO validatemail (userid, code) VALUES("${req.token.userid}" , "${code}")`, (err, result3) => {
                
//                 if (err) throw err;
//                 console.log("INSERTED the Value and Send the Email")
//                 sendMail()


//             })


//             }







// })






// const sendMail = () => {
//         let transporter = nodemailer.createTransport({
//             host: 'mail.privateemail.com',
//             port:465,
//             secure: 'true',
//             auth: {
//               user: 'info@btccrypto.exchange',
//               pass: 'tS7-vRrhtAag[kYB'
//             }
//         });
        
    
//         var mailOptions = {
//             from: 'BCEX do-not-reply@btccrypto.exchange',
//             to: req.body.email,
//             subject: 'Verification Code',
//             html: ` This is Your Code  ${code}`
//         }
    
    
    
    
            
//         try{
//             transporter.sendMail(mailOptions, function(error, info){
//               if (error) {
//                 console.log("Hi" + error);
//               } else {
    
//                 console.log('Email sent: ' + info.response);
//                res.status(200).json({ status: 200, msg: 'success' })
                
//               }
//             }); 
//           }catch(e){
        
//             print(e)
        
//           }
          


//     }

    
       
    
    
    
        
}

module.exports = HomeEmailValidation;