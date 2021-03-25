const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express() 
  app.use(express.static(path.join(__dirname, 'public')))
 app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  app.get('/week10',(req, res)=>res.render('../public/week10'))


  app.post(function (req, res, next) {
    next();
  });
  /***** Code for mail discount project *******/
  app.get("/rate", (req, res) => {
    console.log("Request received for rate page");
    var rate = req.query.rate;
    var method = req.query.method;
    var price = calculateRate(req);
    var params = {Rate: rate, Method: method, Price: price};
    //res.write("This is the Student rate page");
    res.render("pages/discountRate", params);
  });
  function calculateRate(req) {
    var rate = req.query.weight;
    var method = req.query.method;
    /*** Books RentalService Prices ***/
    if(method == "Books (RentalService)"){
      if (rate <= 1) {
        var price = "$" + 0.55;
    
      }
      if (rate > 1 && rate <= 2) {
        var price = "$" + 0.75;
    
      }
      if (rate >2 && rate <= 3) {
        var price = "$" + 0.95;
    
      }
      if (rate >3 && rate <= 3.5) {
        var price = "$" + 1.15;
    
      }
      
    }
    /*** Audiobooks Rentals Prices ***/
    if(method == "Audiobooks (Rentals)"){
      if (rate <= 1) {
        var price = "$" + 0.51;
    
      }
      if (rate > 1 && rate <= 2) {
        var price = "$" + 0.71;
    
      }
      if (rate >2 && rate <= 3) {
        var price = "$" + 0.91;
    
      }
      if (rate >3 && rate <= 3.5) {
        var price = "$" + 1.11;
    
      }
      
    }
    /*** Car Insurance Prices ***/
    if(method == "Car Insurance (Flats)"){
      if (rate <= 1) {
        var price = "$" + (1.00).toFixed(2);
    
      }
      if (rate > 1 && rate <= 2) {
        var price = "$" + (1.20).toFixed(2);
    
      }
      if (rate >2 && rate <= 3) {
        var price = "$" + (1.40).toFixed(2);
    
      }
      if (rate >3 && rate <= 4) {
        var price = "$" + (1.60).toFixed(2);
    
      }
      if (rate >4 && rate <= 5) {
        var price = "$" + (1.80).toFixed(2);
    
      }
      if (rate >5 && rate <= 6) {
        var price = "$" + (2.00).toFixed(2);
    
      }
      if (rate >6 && rate <= 7) {
        var price = "$" + (2.20).toFixed(2);
    
      }
      if (rate >7 && rate <= 8) {
        var price = "$" + (2.40).toFixed(2);
    
      }
      if (rate >8 && rate <= 9) {
        var price = "$" + (2.60).toFixed(2);
    
      }
      if (rate >9 && rate <= 10) {
        var price = "$" + (2.80).toFixed(2);
    
      }
      if (rate >10 && rate <= 11) {
        var price = "$" + (3.00).toFixed(2);
    
      }
      if (rate >11 && rate <= 12) {
        var price = "$" + (3.20).toFixed(2);
    
      }
      if (rate >12 && rate <= 13) {
        var price = "$" + (3.40).toFixed(2);
    
      }
      
    }
    /*** First Class-Retail Prices ***/
    if(method == "First-Class Rental Service - Luxury"){
      if (rate <= 4) {
        var price = "$" + (4.00).toFixed(2);
    
      }
      if (rate > 4 && rate <= 8) {
        var price = "$" + (4.80).toFixed(2);
    
      }
      if (rate >8 && rate <= 12) {
        var price = "$" + (5.50).toFixed(2);
    
      }
      if (rate >12 && rate <= 13) {
        var price = "$" + (1.60).toFixed(2);
    
      }
      
    }
    
    console.log(rate);
    console.log(method);
    console.log(price);
    
      return price;
    
  }