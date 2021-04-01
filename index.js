const express = require('express')
const path = require('path')
// ​
// // Import controller modules here

const booksController = require("./controllers/booksController");
// ​
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
// ​
const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://btplefdrsrnnws:0d26b8fd110edb2b292cbb55014278118e0a5cec981767d3fc85605b28920784@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dbookf2k1iv4p2?ssl=true";
const pool = new Pool({connectionString: connectionString, 
  ssl: {
    rejectUnauthorized: false
  }
});
// ​
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
// parses things that are within the body for us - supports URL encoded bodies

app.use(express.urlencoded({extended:true}));
// supports json encoded bodies
app.use(express.json());
// ​
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index')); 
app.get('/rate', (req, res) => res.render('pages/discountRate')); 
// ​
// Set up ability to view on localhost 5000
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
  console.log("Now listening for connections on port: ", app.get("port"));
})
// ​
app.get("/books", booksController.getBookList);