const connection = require('../../Connection')
const axios = require('axios');


const ShowAllMyReferrals =  (req, res)=>{
    
    let Code = 0;
    let users = []
    let Allusers = []

    connection.query(`SELECT * FROM referral WHERE userid = "${req.token.userid}"`, (err1, result1) => {
        if (err1) throw err1;
        console.log("Getting your own Code")
        if (result1.length) {
            console.log("Record Found")
            Code = result1[0].yourcode;
            console.log("This is your Code here " + Code);
}



        connection.query(`SELECT * From referral WHERE ReferralCode = "${Code}";`, (err2, result2) => {
            if (err2) throw err2;
            console.log("Getting all users having your Code")
                console.log("this is yur result "+result2)
            if (result2.length) {
                console.log("Record Found again")
                console.log(result2)


             
    for (let index in result2) {
  

        users.push(result2[index].userid)
                
                
            }


                connection.query(`SELECT * FROM users WHERE userid IN(?)`, [users], (erx, result3) => {
                    if (erx) throw erx
                    console.log(result3)
                 
                    if (result3.length) {
                        
                    console.log("This is the exracted data here " + result3[0].email)
                    console.log("This is the exracted data here 2 " + result3[1].userid)
                    // console.log(typeof(result3))
                        
                        
                        for (let i = 0; i < result3.length; i++){
                            // console.log("iteration number " + i)
                            Allusers.push({name:result3[i].Name, email:result3[i].email})

                        }

                        console.log("Arrays of All users " + Allusers)
                        
                        res.json(Allusers)

                        // for (let j = 0; j < Allusers.length;j++){console.log("This is User " + Allusers[j].name)}
                        
                    console.log("This is lenght "+result3.length)

                    } else {
                        res.json({msg:'no data to showv  '})
                   }


                })
        





            }






        })

})
    

    
    
        
}

module.exports = ShowAllMyReferrals;