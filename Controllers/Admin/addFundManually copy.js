const connection = require('../../Connection')
const addFundManually =(req, res)=>{
  
    
userid  = req.body.userid
symbol = req.body.currency
  quantity = req.body.quantity


  // let getID = `SELECT * FROM users WHERE email = ${email}`
 

var sql = `SELECT * FROM wallet WHERE UserId ='${userid}'  AND currency ='${symbol}'`;

connection.query(sql,function (err, result) {
   
  if (err) throw err;
  console.log(result.length)
  if(result.length){

      ExistQuan = result[0].quantity
    updatedQuan = ExistQuan + Number(quantity)
    

connection.query('UPDATE wallet SET ? WHERE UserId = ? AND currency = ?', [{ quantity:updatedQuan },userid, symbol],(err,result)=>{

if (err) throw err;
  console.log("updatd")
  


  connection.query(`INSERT INTO payments (userid, fromaddsr, toaddsr, contractaddsr, coin, amount, hash, type, timestamp, dt) VALUES ('${userid}', 'Admin@BCEX', '${userid}', '${symbol}', '${quantity}', '0x77AESG7899EFFBC', 'Deposit')`, (errrr, ressss) => {
 
    if (err) throw err;
    console.log("controller here")
    
     res.json({msg:'success'})
    
});



})




  }
  else{

    console.log("result ni hai")

    var sql = `INSERT INTO wallet ( UserId,quantity, currency) VALUES ("${userid}","${quantity}", "${symbol}")`;


 connection.query(sql,(err,result)=>{

if(err) throw err;

console.log('new added ')


   
   connection.query(`INSERT INTO payments (userid, fromaddsr, toaddsr, contractaddsr, coin, amount, hash, type, timestamp, dt) VALUES ('${userid}', 'Admin@BCEX', '${userid}', '${symbol}', '${quantity}', '0x77AESG7899EFFBC', 'Deposit')`, (errrr, ressss) => {
 
     if (err) throw err;
     console.log("controller here")
     
      res.json({msg:'success'})
     
});


})

 
 
 
 
  }
    
  });
    
        
            
    }
    
module.exports = addFundManually ;