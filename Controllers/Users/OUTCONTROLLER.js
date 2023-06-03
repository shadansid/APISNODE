const connection = require('../../Connection')



const OUTCONTROLLER = (req, res) => {

    connection.query(`SELECT * FROM inandouthistory WHERE userid = "${req.token.userid}" AND type="withdraw"`, (err, result) => {
     

        if (err) throw err;
        console.log("THIS IS MAGIC " + result.length)
        res.json({msg: result.length})


 })
  




}

module.exports = OUTCONTROLLER;