const connection = require('../../Connection')



const GetINOUTCONTROLLER = (req, res) => {

    connection.query(`SELECT * FROM inandouthistory WHERE userid = "${req.token.userid}" AND type="Deposite"`, (err, result) => {
     

        if (err) throw err;
        console.log("THIS IS MAGIC " + result)


        
        res.json({msg: result.length})


 })
  




}

module.exports = GetINOUTCONTROLLER;