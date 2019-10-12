const mysql = require('mysql');
const mysqlConfig = require('./config.js')

const connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
    if (err) {
        console.log('Error connecting ', err)
    } else  {
        console.log('Conncted to dbase ', connection.threadId)
    }
})

const getRandomProductId = function(callback) {
    var countquery = "SELECT COUNT(*) FROM products"
    connection.query(countquery, (err,results) => {
        if (err) {
            callback(err)
        } else 
        {
            var count = results[0]['COUNT(*)'];
            let randomProduct = Math.floor(Math.random() * Number(count))
            callback(JSON.stringify(randomProduct));
        }
    })
}

const getProduct = function(productid,callback) {
    var sql = "SELECT * FROM products WHERE id = ?"
    var id = [productid]
    sql = mysql.format(sql,id);
    console.log(sql);
}

module.exports = {
    getRandomProductId,
    getProduct
}