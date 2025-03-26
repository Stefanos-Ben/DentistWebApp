const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
    {
        name : { type: String, required: true },
        description : { type: String },
        price: { type: Number },
        duration: { type: Number }, // in minutes
    },
    { timestamps: true }
);

module.exports = mongoose.model('Service', ServiceSchema);
