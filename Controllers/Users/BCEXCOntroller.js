const connection = require('../../Connection');

const BCEXCOntroller = async (req, res) => {
  connection.query(`SELECT * from coinlist where symbol = "BCEXUSDT"`, (err, result) => {
    if (err) throw err;
    console.log(result[0].price);
    res.json(result[0].price);
  });
};

module.exports = BCEXCOntroller;
