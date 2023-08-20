let myHttp = require('http');

let myServer = myHttp.createServer(
  function(myRequest, myResponse) {
    console.log(myRequest.url);

    let myText;
    if (myRequest.url === '/password'){
      myText = "<span style='font-size:100px;'>&#128142;</span>";
    } else {
      myText = "<h1>Can you find the treasure?</h1>"
    }
    
    myResponse.writeHead(200, { "Content-Type": "text/html"} );

    myResponse.end(myText);
  }
);

myServer.listen(8080, "0.0.0.0");

console.log("Hint: The password is /password");