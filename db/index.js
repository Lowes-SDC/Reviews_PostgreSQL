// const mysql = require('mysql');
// const mysqlConfig = require('./config.js')

// const connection = mysql.createConnection(mysqlConfig);

const { Client } = require('pg');
const client = new Client();

client.connect();

client.query('SELECT * FROM products WHERE id = ?', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})


// const getProductRating = function(productId, callback) {
//   var ask = "SELECT * FROM ratings WHERE product_id = ?"
//   var id = [productId]
//   ask = mysql.format(sql,id);
//   client.query(ask, (err,results) => {
//       if (err) {
//           console.log(err)
//           callback(err,null)
//       } else
//       {
//           console.log(results)
//           callback(null,results)
//       }
//       client.end()
//   })
// }

// getProductRating(5, ()=>{
//   console.log('hi')
// })