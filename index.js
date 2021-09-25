const express = require('express');

const app = express();

const hour = new Date().getHours();
console.log(hour)
const day = new Date().getDay();
console.log(day)

app.get('/',(req,res)=>{
    if((hour>8) && (hour<17)&&(day<6) ) res.sendFile(__dirname + '/public/home.html');
    else res.sendFile(__dirname + '/public/closed.html')
});
app.get('/home',  function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
  });

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.listen(4001,(error)=>{
    if (error) console.log('serveur is not running')
    else console.log ('sever is running on port 4001')
})