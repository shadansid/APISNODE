const connection = require('../../Connection')
const axios = require('axios');


const ShowTotalReferralBonus =  (req, res)=>{

    connection.query(`SELECT * FROM referralwallet WHERE userid = "${req.token.userid}"`, (err, result) => {
        
        if (err) throw err

        if (result.length) {
            
            // res.json({result[0].quantity })
            console.log(" Data Is @ " + result[0].quantity)
            res.json({msg:result[0].quantity})


       }


    })



    
        
}

module.exports = ShowTotalReferralBonus;