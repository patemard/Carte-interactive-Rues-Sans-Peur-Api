
const db = require("./Models");

var createError = require('http-errors');
 var express = require('express');
 var path = require('path');
 var cors = require("cors");
 var bodyParser = require('body-parser');

 const allowedOrigins = ['https://localhost:4200','http://localhost:4200', 'http://localhost:10000','https://mapapp-edlw.onrender.com'];

// var corsOptions = {
//   origin: "https://localhost:4200"
// };

db.sequelize.sync({ force:true })
.then(() => {
  console.log('Tag table created!');
})
.catch(err => {
  console.error('Error creating Tag table: ', err);
});
 
const tagRoute = require('./routes/tag.routes.')
 
const app = express();
// app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors({
  origin: function (origin, callback) {
      // Check if the request origin is in the allowedOrigins array
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  }
}));
// Static directory path
app.use(express.static(path.join(__dirname, 'MapApp/app/index.html')));
 
 
// API root
app.use('/api', tagRoute)
 
// PORT
const port = process.env.PORT || 10000;
 
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

