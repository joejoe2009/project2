// Triggered by onclick of button 'Show Books'
function showAllBooks(){
    console.log("Showing books...");
  
    var books = $("#books").val(); //value = 'books' which is coded into button
    console.log("Books: " + books); 
  
    // send request to server using /books endpoint which runs request and related functions
    $.get("/books", function(data){
        // whatever is returned from server stored in 'data'
        console.log("Back from server with: ");
        console.log(data);
  
        $("#bookList").append("<h3>Books Currently Available</h3>");
  
        // loop through returned array to display data to html page
        for (var i =0; i<data.books.length; i++){
            var books = data.books[i];
            // div element with id 'ulBooks' used to display data
            $("#ulBookList").append("<li>" + books.title + "</li>");
        }
    })
  }
  