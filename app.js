const express = require("express");
const app = express();
const db = require("./db")

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const messages = await db.getMessages();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.get('/new', (req, res) => {
  res.render('form', { error: null });
});

app.post('/new', async (req, res) => {
    const messageText = req.body.messageText;
    const nameText = req.body.nameText;

    if (!messageText || !nameText) {
      return res.render('form', { error: 'Please enter your name and message.' });
    }

    await db.addMessage(messageText, nameText);
    res.redirect('/');
});

app.listen(3000, () => {
  console.log("server running at PORT 3000");
});