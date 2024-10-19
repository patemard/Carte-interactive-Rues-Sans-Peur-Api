const express = require('express');
const app = express();

const tagRoute = express.Router();
const nodemailer = require('nodemailer');
let Tag = require('../Models/tag');

//https://www.tutsmake.com/angular-12-crud-node-js-express-mysql-tutorial/

//https://chatgpt.com/c/ac0ea6e0-be1e-4ebd-bef9-07655ff6b025

// Add Tag
tagRoute.route('/add-tag').post((req, res, next) => {
    console.log(req.body)
  Tag.create({
    title: req.body.title, 
    mercatorCoord: req.body.mercatorCoord, 
    description: req.body.description,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    emotion: req.body.emotion,
    transport: req.body.transport,
    trajectory:  req.body.trajectory,
    active: req.body.active,
    identification: req.body.identification
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
      console.error('Error fetching tag:', error);
      return next(error)
    });
  })

// Get Tag
tagRoute.route('/read-tag/:id').get((req, res, next) => {
    Tag.findByPk(req.params.id)
    .then(data =>{
      console.log(data);
      res.json(data)
    })
    .catch((error) => {
      console.error('Error fetching tag:', error);
      return next(error)
    });
})


// Update Tag
tagRoute.route('/update-tag/:id').put((req, res, next) => {

  Tag.findByPk(req.params.id) // findByPk finds a record by its primary key
  .then(tag => {
    if (!tag) {
      throw new Error('Tag not found');
    }
    return tag.update(req.body); // Use the update method to update the tag
  })
  .then(updatedTag => {
    console.log('Updated Tag:', updatedTag);
  })
  .catch(err => {
    console.error('Error updating Tag:', err);
  });
})

// Delete Tag
tagRoute.route('/delete-tag/:id').delete(async (req, res, next) =>  {
  const { id } = req.params;
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      console.log(`Tag with ID ${id} not found`);
      return res.status(404).json({ message: 'Tag not found' });
    }
    await tag.destroy();
    console.log(`Tag with ID ${id} deleted successfully`);
    return res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    console.error(`Error deleting tag with ID ${id}:`, error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

tagRoute.post('/send-email', (req, res) => {
  const { from, to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'RuesSansPeur@gmail.com',
      pass: 'tcvt sdcs aguy orez'
    }
  });

  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});





module.exports = tagRoute;