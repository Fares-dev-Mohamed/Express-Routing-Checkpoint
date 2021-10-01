const express = require('express');
const app = express();

const hour = new Date().getHours();
const day = new Date().getDay();

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    if (day >0 && day <6 && hour >7 && hour < 17) {
      next();
    } else {  
          res.sendFile(__dirname + '/public/closed.html')
    }
  });
 app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/home.html")
 })
app.set('view engine', 'pug');

app.listen(5000,(error)=>{
    if (error) console.log('serveur is not running')
    else console.log ('sever is running on port 5000')
})
