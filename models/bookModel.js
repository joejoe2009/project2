process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://btplefdrsrnnws:0d26b8fd110edb2b292cbb55014278118e0a5cec981767d3fc85605b28920784@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dbookf2k1iv4p2?ssl=true";
const pool = new Pool({connectionString: connectionString, 
  ssl: {
    rejectUnauthorized: false
  }
});

// Add 'callback' function, which is the function added to the controller function to return results
function getAllBooks(callback){
    // gets all classes from db
    
    var sql = "SELECT id, title FROM books";
    
    pool.query(sql, function(err, db_result){
      
      if(err){
          throw err;
      } else {
          // We got successful result from db
          console.log("Back from db with: ");
          console.log(db_result);
          
          //create variable that the found rows are dumped into
          var result = {books:db_result.rows};
          console.log("Result variable is: " + result);
          
          // instead of immediate return, call callback function, which is function added to controller function to wait
          callback(null, result);
      }
    });
}

// Export functions to be used in controllers
module.exports = {
    getAllBooks: getAllBooks
  };