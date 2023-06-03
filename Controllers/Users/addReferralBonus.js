const connection = require('../../Connection')
const axios = require('axios');


const addReferralBonus =  (req, res)=>{
    
    let referCode = req.body.referralcode 
    let referUserId = 0;

    
    if (referCode) {
        connection.query(`INSERT INTO referralwallet (userid, currency, quantity, refercode) VALUES("${req.userid}","${"BCEX"}","${"20"}","${referCode}")`, (err, result) => {
            if (err) throw err;
            console.log("Coin added to registered user through refer Code")

            connection.query(`SELECT * FROM referral WHERE yourcode = "${referCode}"`, (err2, result2) => {
                if (err2) throw err2
                console.log(result2[0].userid)
                referUserId = result2[0].userid


                if (referUserId) {
                    
                    connection.query(`INSERT INTO referralwallet (userid, currency, quantity, refercode) VALUES("${referUserId}","${"BCEX"}","${"10"}","${req.yourcode}")`, (err3, result3) => {
                        if (err3) throw err3
                        console.log("BOTH Referral Bonus Credit Success")



                    })


                }



            })
    


    
    })    
    
    
    



 }



    
        
}

module.exports = addReferralBonus;