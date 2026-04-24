const express = require("express")
const app = express()

app.set('view engine', 'ejs'); 

app.get('/', (res, req) =>{
  res.render('index')
});

app.get('/new', (res, req) => {
    res.render('new')
});

app.listen(3000, () => {
    console.log("server running at PORT 3000")
})