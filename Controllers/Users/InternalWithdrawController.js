const connection = require("../../Connection");
const axios = require("axios");
const InternalWithdrawController = async (req, res) => {
 
  let coin = req.body.coin;
  let amount = parseFloat(req.body.amount);
  let email = req.body.email;  
  let myWallet = 0
  let useridfromemail = 0;
  let PreQuan = 0;



  // Step 1          

  connection.query(`SELECT * FROM wallet WHERE currency = "${coin}" AND UserId = "${req.token.userid}"`, (err, result) => {
    if (err) throw err;
    console.log("Checking sufficient Amount of coin is there")
    
    if (result.length) {
      console.log("Coin is There now Check , is it sufficient or not")
      
      if(result[0].quantity > amount) {
        console.log("Amount " + amount)
        console.log("quantity is there " + result[0].quantity)
           myWallet = result[0].quantity - amount

// STEP 2 Checking EMail valid or not 
        
        connection.query(`SELECT * FROM users WHERE email = "${email}"`, (error, result2) => {
          if (err) throw err;
          
          if (result2.length) {
            console.log("User exist") 
            console.log("This is User " + result2[0].email)
            console.log("This is User " + result2[0].userid)
            useridfromemail = result2[0].userid

            connection.query(`START TRANSACTION`, (error2, result3) => {
              if (err) throw err;
              console.log("TRANSACTION START")


              connection.query(`UPDATE wallet SET quantity = "${myWallet}" WHERE UserId = "${req.token.userid}" AND currency ="${coin}"`, (error3, result4) => {
                
                if (err) throw err;
                console.log("Wallet updated first")
                
                connection.query(`SELECT * FROM wallet WHERE UserId = "${useridfromemail}" AND currency ="${coin}"`, (eers, output) => {
                  if (eers) throw eers;

                  if (output.length) {
                    PreQuan = parseFloat(output[0].quantity)
                      console.log("User wallet exits")
                 
                    connection.query(`UPDATE wallet SET quantity = "${PreQuan + amount}" WHERE UserId = "${useridfromemail}" AND currency = "${coin}" `, (err4, output2) => {
                      
                      if (err) throw err;
                      console.log("done")
                  
                      


                    
  connection.query(`INSERT INTO inandouthistory (userid,fromadd, toadd,coin,amount, type) VALUES("${req.token.userid}","${req.token.email}","${email}","${coin}","${amount}","${"withdraw"}" )`, (eee, rrr) => {
    
    
    if (eee) throw eee;
    console.log("controller here")
   
    res.json({ msg: 'success' })
    
    connection.query(`COMMIT`)
    
  })

                        
              


                








                    } )




                  } else {
                    
                    connection.query(`INSERT INTO wallet (UserId, quantity, currency) VALUES("${useridfromemail}","${amount}","${coin}")`, (erx, rex) => {
                      
                      
                      connection.query(`INSERT INTO inandouthistory (userid,fromadd, toadd,coin,amount, type) VALUES("${req.token.userid}","${req.token.email}","${email}","${coin}","${amount}","${"withdraw"}" )`, (eee, rrr) => {
    
    
                        if (eee) throw eee;
                        console.log("controller here")
                       
                        res.json({ msg: 'success' })
                        
                        connection.query(`COMMIT`)
                        
                      })
                    
                    
                    
                    
                    })




                  }







                })

              })



          })  
            
            

          } else {
            console.log("User not Exist")
            res.json({msg:'User not Exist'})
          }



        })


        


        

      } else {
        console.log("Insufficient Coin " + amount)
        res.json({msg:'Insufficient'})
      }









      }


})









};

module.exports = InternalWithdrawController;

