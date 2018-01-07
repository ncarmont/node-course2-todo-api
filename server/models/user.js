var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    mingLength: 1
  }
});

module.exports =  {User}
