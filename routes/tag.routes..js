const express = require('express');
const app = express();

const tagRoute = express.Router();
let tag = require('../models/tag');

//https://www.tutsmake.com/angular-12-crud-node-js-express-mysql-tutorial/

// Add tag
tagRoute.route('/add-tag').post((req, res, next) => {
   tag.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all tag
tagRoute.route('/').get((req, res) => {
    tag.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get tag
tagRoute.route('/read-tag/:id').get((req, res) => {
    tag.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update tag
tagRoute.route('/update-tag/:id').put((req, res, next) => {
    tag.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('tag updated successfully!')
    }
  })
})

// Delete tag
tagRoute.route('/delete-tag/:id').delete((req, res, next) => {
    tag.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
      msg: data
      })
    }
  })
})

module.exports = tagRoute;