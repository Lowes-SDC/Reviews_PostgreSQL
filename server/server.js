const express = require('express')
const db = require('../db');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 8080;
/** not sure if the following two lines are needed **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(__dirname + '/../client/public/'))
app.listen(port,() => console.log(` Express listening on port ${port}!`))

app.get('/api/randomproduct', (req,res) => {
    db.getRandomProductId((err,result) => {
        if(err) {
            res.send(err)
        } else
        {
            db.getProduct(result, (err,product) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(product));
                }
            })

        }
    })
})

app.post('/api/products', (req,res) => {

    db.getProduct('14', (err,result) => {
        if (err) {
            res.send(err)
        } else
        {
            res.send(result);
        }
    } )
})

app.get('/api/productreview', (req,res) => {
 // get product id
    let id = req.query.id;
    var r = " get product id = "+id
   
    res.send(r);
 // insert all into product id 
});

app.post('/api/productreview',(req,res)=> {
    let id = req.body.id;
    console.log('stars ' + req.body.stars )
    var r = "post product id ="+id;
    db.setProductRating(req.body, (err,result)=> {
        if (err) {
            res.send(err)
        } else {
            db.setProductReview(req.body,(err,result)=> {
                if (err) {
                    res.send(err)
                } else
                {
                    res.send(JSON.stringify(result))
                }
            });
          
        }
    })
})

app.get('/api/productrating', (req,res) => {
    // get id
    let id = req.query.id;
    db.getProductRating(id, (err,rating) => {
        if (err) {
            res.send(err);
        } else
        {
            // get product reviews
            db.getProductReviews(id, (err, reviews) => {
                if (err) {
                    res.send(err);
                } else 
                {
                 var ro = {};
                 ro.reviews = reviews;
                 ro.ratings = rating;
                 res.send(JSON.stringify(ro)); 
                }
            })
            
            
        }
    })
})

app.get('/api/initialize', (req,res) => {
    console.log('initializing data');
    db.initializereviews( (err,result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})
