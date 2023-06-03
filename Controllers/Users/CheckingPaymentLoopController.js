const connection = require('../../Connection')
const axios = require('axios')

const CheckingPaymentLoopController = async (req,res, next)=>{

    let address = req.body.address;
    let inputdata = req.body.inputdata;
    let currency = req.body.currency;

  
        console.log("issue 1")

    
    const response = await axios.get(`https://api.bscscan.com/api?module=account&action=tokentx&${currency == 'usdt'?'contractaddress=0x55d398326f99059ff775485246999027b3197955':null}&address=${address}&sort=desc&apikey=E899JSF759RHVR5C5G1E14ESVWHY4YCK3Z`);
    
    const data = response.data;
    console.log( response.data +"=data after 1 response is here")
    let myval;
   
   
   
   
   
    if (data.result.length) {
        
        console.log("data is here inside LOOP " + data.result[0])
        let str = '1'
        let decimal = data.result[0].tokenDecimal
         myval = data.result[0].hash
        
        
        console.log("Before 2 loop")
        
for (let i = 0; i < decimal; i++){

    str += 0;
    
}

let num = parseInt(str);

        const amount = data.result[0].value / num;
        console.log(amount)

            

    connection.query(`SELECT hash FROM payments WHERE userid = "${req.token.userid}  "`, (ers, ress) => {
        if (ers) throw ers;
        console.log("select and check same hash "+ress )

        if (ress.length) {
            console.log("zhash in DB")
            for(let x of ress){
                
                if(x.hash === myval) {
        console.log("Hash is found in DB")
        // console.log("fail")
        return res.json({msg:'Failed'});
        
    }
}

        console.log("Before Checking the amount")
        if (amount === inputdata){
            console.log("amount Reconginsed")
//   Store every time first response 
  
connection.query(`INSERT INTO payments (userid ,fromaddsr , toaddsr , contractaddsr, coin, amount, hash, timestamp) VALUES("${req.token.userid}","${data.result[0].from}","${data.result[0].to}","${data.result[0].contractAddress}","${data.result[0].tokenSymbol}","${amount}","${data.result[0].hash}","${formattedDateTime}")`, (err, res) => {
    if (err) throw err;
    console.log("INSERTED")
    return next()

})





        }
  
      






        } else {
                    console.log("Checking input ddd")
            if (amount === inputdata){
                console.log("both values match inside if")
                //   Store every time first response 
                  
                connection.query(`INSERT INTO payments (userid ,fromaddsr , toaddsr , contractaddsr, coin, amount, hash, timestamp) VALUES("${req.token.userid}","${data.result[0].from}","${data.result[0].to}","${data.result[0].contractAddress}","${data.result[0].tokenSymbol}","${amount}","${data.result[0].hash}","${data.result[0].timeStamp}")`, (err, res) => {
                    if (err) throw err;
                    console.log("INSERTED DATA SUCCESS")
                    return next()
                
                })
                
                
                
                
                
                        }





        }
    
    
    
    
    
    
    
    
    })
 

    } else {
        console.log("no record found")

            // re run request













}



}
module.exports =CheckingPaymentLoopController;