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
            callback(err,null)
        } else
        {
            var count = results[0]['COUNT(*)'];
            let randomProduct = Math.floor(Math.random() * Number(count))
            callback(null,JSON.stringify(randomProduct));
        }
    })
}

const getProduct = function(productid,callback) {
    var sql = "SELECT * FROM products WHERE id = ?"
    var id = [productid];
    sql = mysql.format(sql,id);
    console.log(sql);
    connection.query(sql, (err,results) => {
        if (err) {
            callback(err,null)
        } else
        {
            callback(null,results[0])
        }
    })

}

const getProductRating = function(productId, callback) {
    var sql = "SELECT * FROM ratings WHERE product_id = ?"
    var id = [productId]
    sql = mysql.format(sql,id);
    connection.query(sql, (err,results) => {
        if (err) {
            callback(err,null)
        } else
        {
            callback(null,results)
        }
    })

}

const setProductRating = function(rating,callback) {
    // add a product rating
    // use UPDATE
    var columns = [rating.stars, rating.stars, rating.id];
    var sql = 'UPDATE ratings SET ?? = ?? + 1 ';
    sql += 'WHERE product_id = ?'
    sql = mysql.format(sql,columns);
    console.log(sql);
    connection.query(sql, (err, results) => {
        if (err) {
            callback(err,null)
        } else  {
            callback(null,results)
        }
    })

}

const setProductReview = function(reviewObj,callback) {
    var values = [reviewObj.id, reviewObj.recommended, reviewObj.purchaseDate,
    reviewObj.stars, reviewObj.reviewTitle, reviewObj.detailedReview,
    reviewObj.nickname, reviewObj.email]
    var sql = 'INSERT into reviews (product_id,recommended,';
    sql += 'purchaseDate,starsGiven,title,detailed,nickname,email)';
    sql += 'VALUES ( ?,?,?,?,?,?,?,?)';

    sql = mysql.format(sql,values);
    console.log(sql);
    connection.query(sql, (err,results) => {
        if (err) {
            callback(err,null)
        } else  {
            callback(null,results);
        }
    })
}

const getProductReviews = function(id,callback) {
    var pid = [id];
    var sql = 'SELECT * from reviews WHERE product_id = ?';
    sql = mysql.format(sql, pid);
    connection.query(sql, (err,results) => {
        if (err) {
            callback(err,null)
        } else  {
            console.log(results);
            callback(null,results);
        }
    })
}
const initializeRatings= function(callback) {

    // DROP TABLE IF EXISTS
    // TODO
    // CREATE TABLE

    // create new random reviews for all products
    var totalItems = 101;
    var sql = "INSERT INTO ratings (product_id,one_star,two_stars,";
    sql += "three_stars,four_stars,five_stars) "
    sql += 'VALUES '
    for (var i = 1; i<totalItems;i++) {
        sql += '('+i+','+randomvotes()+','+randomvotes()+',';
        sql += randomvotes()+','+randomvotes()+','+randomvotes()+')'
        if (i <totalItems-1) sql += ','
    }
    connection.query(sql, (err,results) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,results);
        }
    })
}

// helper function to generate random number
const randomvotes = function() {
    return (Math.floor(Math.random()*100));
}

module.exports = {
    getRandomProductId,
    getProduct,
    getProductRating,
    initializeRatings,
    setProductRating,
    setProductReview,
    getProductReviews
}