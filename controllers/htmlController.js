
const path = require('path');

module.exports = (app) => {

  app.get('/game1', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/game1/index.html'))
  });

  app.get('/bookDetail/:title', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bookDetail.html'))
  });

  app.get('/addBook', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/addBook.html'))
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });
}