const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.get('/new', (req, res) => {
  res.render('form');
});

app.post('/new', (req, res) =>{
    const messageText = req.body.messageText;
    const nameText = req.body.nameText;
    messages.push({ text: messageText, user: nameText, added: new Date() });
    res.redirect('/')
})

app.listen(3000, () => {
  console.log("server running at PORT 3000");
});