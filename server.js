var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var past={
           title: 'Past | Raj Shah',
           date: 'March 1,2018',
           content:`
           <p>
            I have always tried to be at top of my best.
            My previous status prooves the same.
            <br>
            </p>
            <div>
            <p>
            10th result:96.2% ICSE From R.B.K School <br>
            Admitted myself towards Success Gauranteed Institute:----IIT POINT<br>
            12th result:92%
            </p>
            <p>
            <iframe width="420" height="345" src="https://www.youtube.com/embed/6q3wAHMJqm4? autoplay=1">
            </iframe>
            </p>
            <p>
            Be Awaited for next future updates!
            Thanks for watching.
            </p>
            </div>`
};
function createtemplate(obj){
    var title=obj.title;
    var date=obj.date;
    var content= obj.content;
var htmlTemplate= `
    <html>
    <head> 
    <title>${title}</title>
     <link href="/ui/style.css" rel="stylesheet" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="background-color:powderblue">
    <div class="home">
        <a href="\">Home</a>
    </div>
    <hr>
    <div class="date">
        ${date}
    </div>
    <div class="past">
    
    <div>
       ${content}
    </div>
    </body>    
    </html>`
    ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/past', function (req, res){
   res.send(createtemplate(past)); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
