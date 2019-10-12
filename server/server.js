const express = require('express')
const db = require('../db');
const bodyParser = require('body-parser')


const app = express();
const port = 8080;
/** not sure if the following two lines are needed **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/../client/public/'))
app.listen(port,() => console.log(`Express listening on port ${port}!`))

app.get('/api/randomproductid', (req,res) => {
    db.getRandomProductId( (err,result) => {
        if(err) {
            res.send(err)
        } else 
        {
            res.send(result)
        }
    })
})

app.get('/api/products', (req,res) => {
    db.getProduct('14', (err,result) => {
        if (err) {
            res.send(err)
        } else 
        {
            res.send(result);
        }
    } )
})

