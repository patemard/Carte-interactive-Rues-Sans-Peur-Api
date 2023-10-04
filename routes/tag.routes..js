const express = require('express');
const app = express();

const tagRoute = express.Router();
let Tag = require('../Models/tag');

//https://www.tutsmake.com/angular-12-crud-node-js-express-mysql-tutorial/

// Add Tag
tagRoute.route('/add-tag').post((req, res, next) => {
  Tag.create({
    title: req.body.title, 
    text: req.body.description,
    longitude: req.body.coordinates.longitude,
    latitude: req.body.coordinates.latitude,
    emotion: req.body.emotion,
    transport: req.body.transport
   })
  .then((tag) => {
    console.log('tag created:', tag.toJSON());
    res.json(tag)

  })
  .catch((error) => {
    console.error('Error creating tag:', error);
    return next(error)
  });

});
 
// Get all Tag
tagRoute.route('/').get((req, res) => {
    Tag.findAll()
    .then(data =>{
      console.log(data);
      res.json(data)
    })
    .catch((error) => {
      console.error('Error creating tag:', error);
      return next(error)
    });
  })

// Get Tag
tagRoute.route('/read-tag/:id').get((req, res, next) => {
    Tag.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Tag
tagRoute.route('/update-tag/:id').put((req, res, next) => {
    Tag.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Tag updated successfully!')
    }
  })
})

// Delete Tag
tagRoute.route('/delete-tag/:id').delete((req, res, next) => {
    Tag.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
      msg: data
      })
    }
  })
})


function mapToGeoJSON(tag) {
  return {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [tag.latitude, tag.longitude] 
    },
    "properties": {
      "title": tag.title,
      "description": tag.text,
      "transport": tag.transport,
      "emotion": tag.emotion
    }
  }
}

module.exports = tagRoute;