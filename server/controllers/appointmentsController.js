const Appointment = require('../models/Appointment');

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('service');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
};

const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id).populate('service');
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch appointment' });
    }
};

const createAppointment = async (req, res) => {
    try {
        const { service, patientName, email, phone, appointmentDate, message } = req.body;
        const newAppointment = new Appointment({ 
            service, 
            patientName, 
            email, 
            phone, 
            appointmentDate, 
            message,
            status: 'pending', 
        });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create appointment' });
    }
};


const updateAppointment = async (req, res) => {
    try {
        const {
            service,
            patientName,
            email,
            phone,
            appointmentDate,
            message,
            status,
        } = req.body

        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { service, patientName, email, phone, appointmentDate, message, status },
            { new: true }
        );

        if (!updatedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update appointment' });
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete appointment' });
    }
};

module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
};