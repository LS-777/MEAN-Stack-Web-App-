const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({


    /*owner: {
         type: Schema.Types.ObjectId,
         ref: 'User'
    }
    */
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    contact: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
});

module.exports = mongoose.model('Event', eventSchema, 'events');