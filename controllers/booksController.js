 const bookModel = require("../models/bookModel");
 
 //function from "/classes" in server.js
function getBookList(req, res){
// get the list of books
  console.log("Getting book list...");
  
  //create variable to store result from model function
// Callback function added so it doesn't block program while fetching
   bookModel.getAllBooks(function(error, result){
     //return result to user, after it is finished being retrieved from database
     res.json(result);
   });
 }
 
 // Export functions to be called in server.js endpoints
  module.exports = {
  getBookList: getBookList
  };
 