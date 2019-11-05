//load 1M products and 10M Reviews

const faker = require('faker');
const fs = require('fs');

const newWrite = fs.createWriteStream('db/products.csv');
console.time('stuff')

//newWrite.write()
//const writeItems = fs.createWriteStream('./products.csv');
newWrite.write('id,name,price,description,category,url,reviews\n','utf8');

console.time('stuff')

function writeLotsOfProducts(writer, encoding, callback) {
  let i = 1000000; //change to 10,000,000
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.name.findName();
      const price = faker.finance.amount();
      const description = faker.lorem.sentence();
      const category = faker.commerce.department();
      const url = faker.internet.url();
      const data = `${id},${name},${price},${description},${category},${url}\n`;
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
});

console.timeEnd('stuff')

    //CREATE TABLE products (id INTEGER, name VARCHAR(40), price DECIMAL, description VARCHAR(400), category VARCHAR(45), url VARCHAR(255));

   // COPY products FROM '/Users/rob/Documents/Hack Reactor/SDC/Reviews_PostgreSQL/db/products.csv' DELIMITER ',' CSV HEADER;