const express = require('express');
const multer = require('multer');
const upload = multer();

const app = express();

app.set('views', 'views');
app.use(express.static('client'));
app.get('/', (req, res) => {
  res.render('index.pug');
});
app.post('/analysis', upload.single('file'), (req, res) => {
  res.send(req.file.size.toString());
});
app.listen(process.env.port || 3000, (err) => {
  if (!err) {
    console.log(`Server started on port ${process.env.port || 3000}`);
  }
});
