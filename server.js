
const db = require("./Models");

var createError = require('http-errors');
 var express = require('express');
 var path = require('path');
 var cors = require("cors");
 var bodyParser = require('body-parser');
 
var corsOptions = {
  // origin: "http://localhost:4200"
  origin: "https://mapapp-edlw.onrender.com"

};

db.sequelize.sync()
.then(() => {
  console.log('Tag table created!');
})
.catch(err => {
  console.error('Error creating Tag table: ', err);
});
 
const tagRoute = require('./routes/tag.routes.')
 
const app = express();
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
 
// Static directory path
app.use(express.static(path.join(__dirname, 'MapApp/app/index.html')));
 
 
// API root
app.use('/api', tagRoute)
 
// PORT
const port = process.env.PORT || 1000;
 
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
 
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
 
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'MapApp/src/app/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

