const connection = require('../../Connection')

const ShowTradeHistoryController =(req, res)=>{


        let sql = `SELECT * FROM transactionhistory WHERE UserId = "${req.token.userid}"`

        connection.query(sql , (err , results)=>{

            if(results.length){

      
              return  res.status(200).json({msg:results.reverse()});


            }
          
        
                res.status(200).json({msg:4});


              
          
            



        })

}

module.exports = ShowTradeHistoryController;