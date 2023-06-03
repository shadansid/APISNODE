const connection = require('../../Connection')
const axios = require('axios');


const ConfirmCodeWithdraw =  (req, res, next)=>{
    


    // console.log("This is Code " + req.body.code)
    // console.log("This is Email " + req.body.email)
    // console.log("This is amount " + req.body.amount)
    // console.log("This is coin " + req.body.coin)
    

    connection.query(`SELECT * FROM validatemail WHERE userid = "${req.token.userid}"`, (err, result) => {
        if (err) throw err;
        
        if (result.length) {
            console.log("THis is code here " + result[0].code)
            


            if (req.body.code == result[0].code) {
                
                return next()

            } else {
                console.log("Invalid Code")
            }




        } else {
            
            console.log("no record found ")
        }



    })

    
    
    
        
}

module.exports = ConfirmCodeWithdraw;