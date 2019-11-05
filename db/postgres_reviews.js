//load 1M products and 10M Reviews

const faker = require('faker');
const fs = require('fs');

const newWrite = fs.createWriteStream('db/reviews.csv');
console.time('stuff')

newWrite.write('id,product_id,recommended,purchaseDate,starsGiven,title,detailed,nickname,email\n','utf8');
//CREATE TABLE reviews (id INTEGER, product_id INTEGER, recommended INTEGER, purchaseDate varchar(400), starsGiven DECIMAL, title VARCHAR(50), detailed VARCHAR(255), nickname VARCHAR(30), email VARCHAR(40));

function writeLotsOfProducts(writer, encoding, callback) {
  let i = 10000000; //change to 10,000,000
  let id = 0;
  let prodID = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if((id-1)%10 === 0){
        prodID++;
      }
      const recommended = faker.random.number(1000);
      const purchaseDate = faker.date.past();
      const starsGiven = faker.finance.amount(0,5,1);
      const title = faker.commerce.productName();
      const detailed = faker.lorem.sentence();
      const nickname = faker.name.firstName();
      const email = faker.internet.email();
      const data = `${id},${prodID},${recommended},${purchaseDate},${starsGiven},${title},${detailed},${nickname},${email}\n`;
      if(i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0){
      writer.once('drain', write);
    }
  }
  write()
}

writeLotsOfProducts(newWrite, 'utf-8', ()=> {
  newWrite.end();
  console.timeEnd('stuff')
});



// COPY reviews FROM '/Users/rob/Documents/Hack Reactor/SDC/Reviews_PostgreSQL/db/reviews.csv' DELIMITER ',' CSV HEADER;