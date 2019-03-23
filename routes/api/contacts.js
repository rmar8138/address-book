const express = require('express');
const router = express.Router();

// Contact Model
const Contact = require('../../models/Contact');

// @@route GET api/contacts
// @desc   Get All Contacts
// @access Public
router.get('/', (req, res) => {
  // find all Contacts in DB
  Contact.find().then((contacts) => res.json(contacts));
});

// @@route POST api/contacts
// @desc   Create contact
// @access Public
router.post('/', (req, res) => {
  const { name, address, email, mobile } = req.body;
  const newContact = new Contact({
    name,
    address,
    email,
    mobile,
  });

  newContact.save().then((contact) => res.json(contact));
});

// @@route PATCH api/contacts
// @desc   Edit contact
// @access Public
router.patch('/:id', (req, res) => {
  const editedContact = req.body;
  const id = req.params.id;

  Contact.findByIdAndUpdate(id, editedContact, { new: true }).then((contact) =>
    res.json(contact),
  );
});

// @@route DELETE api/contacts/:id
// @desc   Delete contact
// @access Public
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Contact.findByIdAndDelete(id)
    .then((contact) => res.json(contact))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
