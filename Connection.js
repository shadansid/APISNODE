 const mysql = require('mysql');  


 const Connection = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",
database:"bynance",
// socketPath: '/var/run/mysqld/mysqld.sock'
 });  


 
Connection.connect(function (err) {
    if(err){
        console.log("Error !");
    }
    else{
        console.log("CONNECTION SUCCESS.");
    }
 });
 
   
module.exports = Connection;