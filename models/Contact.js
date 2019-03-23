const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    // SERVER SIDE VALIDATION HERE
  },
  mobile: {
    type: Number,
  },
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
