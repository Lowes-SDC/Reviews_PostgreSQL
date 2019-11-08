// const mysql = require('mysql');
// const mysqlConfig = require('./config.js')

// const connection = mysql.createConnection(mysqlConfig);

const { Client } = require('pg');
// const client = new Client({
//   user: 'rob',
//   host: 'localhost',
//   database: 'lowes',
//   password: 'postgres',
//   port: 5432,
// });

var connectionString = "postgres://rob:password@localhost:5432/lowes";
const client = new Client({
    connectionString: connectionString
});

//client.connect();

client.connect(err => {
  if (err) {
    console.error('CONNECTION error', err.stack)
  } else {
    console.log('You connected');
    //createTable();
  };
});

// client.query('SELECT * FROM products WHERE id = 5', (err, res) => {
//   console.log(err ? err.stack : res) // Hello World!
//   client.end()
// })

const getReviewsPerId = function(prod_id, callback) {

  const query = {
    text: `SELECT * FROM reviews WHERE product_id=${prod_id}`
  }
  //console.time('stuff')
  client.query(query, (err, res) => {
    if (err) {
      callback(err, null) //err.stack
    } else {
      callback(null,res.rows)
    }
  })
  //console.timeEnd('stuff')
}

module.exports = {
  getReviewsPerId
}
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