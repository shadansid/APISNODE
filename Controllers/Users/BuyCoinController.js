const connection = require('../../Connection')

const BuyCoinController =(req, res)=>{
  // symbol = "btc"
  // quantity = 50

console.log("BUYCOIN CONTROLLER HERE !!!!!!!!!!!!!!!!!!!!")

  symbol = req.body.currency
  quantity = req.body.inputdata

  var sql = `SELECT * FROM wallet WHERE Userid ='${req.token.userid}'  AND currency ='${symbol}'`;

connection.query(sql,function (err, result) {
     
    if (err) throw err;
    console.log(result.length)
    if(result.length){
      console.log('result hai ')
      console.log('ye dekh :  ' + result[0].quantity)
        ExistQuan = result[0].quantity
      updatedQuan = ExistQuan + Number(quantity)
      // console.log(typeof(quantity))
      // console.log(typeof(ExistQuan))
      // console.log("yaha bhi : " + updatedQuan)


connection.query('UPDATE wallet SET ? WHERE UserID = ? AND currency = ?', [{ quantity:updatedQuan }, req.token.userid, symbol],(err,result)=>{

  if (err) throw err;
  console.log("updatd")
  res.json({msg:'Payment Success'})


})




    }
    else{

      console.log("result ni hai")

      var sql = `INSERT INTO wallet ( Userid,quantity, currency) VALUES ("${req.token.userid}","${quantity}", "${symbol}")`;


   connection.query(sql,(err,result)=>{

if(err) throw err;

console.log('new added ')

  
})

   
   
   
   
    }
      
    });


    
        
}

module.exports = BuyCoinController ;













