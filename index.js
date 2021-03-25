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

  // app.get("/math", (req, res) => {
  //   var result = solveMath(req);
  //   res.render("pages/results", {
  //     answer: result
  //   });
  // });
  // app.get("/math_service", (req, res) => {
  
  //   res.writeHead(200, {
  //     "Content-Type": "application/json"
  //   })
  //   var result = solveMath(req);
  //   console.log(result);
  //   var json = JSON.stringify({
  //     "answer": result
  //   })
  //   console.log(`math service: ${json}`);
  //   res.end(json);
  // })
  // async function () {
  //   let response = await fetch('/math_service')
  //   let responseJson = await response.json()
  //   let fromServer = responseJson.myString
  //   alert(fromServer)
  // }
  // app.get(fetch('/results')
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  //   componentWillMount: function(){
  //     var fromServer = fetch('/results')
  //     .then(function(response) {
  //       return response.json()
  //     })
  //     .then(function(responseJson) {
  //       return responseJson.myString
  //     })
  //     alert(fromServer);
  //   },
  // app.listen(PORT, () => console.log(`Listening on ${PORT}`))
  // if a file is in the public it just renders automatically
  // operand1, operation, operand2
  // function solveMath(req) {
  //   var operand1 = req.query.operand1;
  //   var operand2 = req.query.operand2;
  //   var operation = req.query.operation;
  
  //   if (operation == "+") {
  //     var result = +operand1 + +operand2;
  
  //   }
  //   if (operation == "-") {
  //     var result = +operand1 - +operand2;
  
  //   }
  //   if (operation == "*") {
  //     var result = +operand1 * +operand2;
  
  //   }
  //   if (operation == "/") {
  //     var result = +operand1 / +operand2;
  
  //   }
  //   console.log(operation);
  //   console.log(operand2);
  //   console.log(operand1);
  //   console.log(result);
  //   // res.render('/results', () => {
  //   //   answer: result 
  //   // })
  //   return result;
  // }