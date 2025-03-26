const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema(
    {
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        },
        patientName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        appointmentDate: { type: Date, required: true },
        message: { type: String },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'rejected', 'completed', 'cancelled'],
            default: 'pending'
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);