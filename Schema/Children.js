const mongoose = require('mongoose');

const Children = mongoose.model('Children', 
{
'firstName' : {
    'type': String
},
'lastName' : {
    'type': String,
    'required' : true
},
'age': {
    'type': Number
}
})

module.exports = Children