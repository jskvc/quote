function myFunction(){
$.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",  
  success: function( response ) {
       $("#quote").html("<p id='quote' class='lead text-center'>" +
          response.quoteText + "<br/><i><sub>" + response.quoteAuthor + "<sub><i></p>");
       $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
  }
});
}
$(function() {
  myFunction();
});
$("#button1").click(function(){
  myFunction();
});
