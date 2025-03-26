const Service = require('../models/Service');

const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
};

const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch service' });
    }
};

const createService = async (req, res) => {
    try {
        const { name , description, price, duration } = req.body;
        const newService = new Service({name, description, price, duration});
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create service' });
    }
};

const updateService = async (req, res) => {
    try {
        const { name , description, price, duration } = req.body;
        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            { name, description, price, duration },
            { new: true }
        );
        if (!updatedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json(updatedService);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update service' });
    }
};

const deleteService = async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete service' });
    }
};

module.exports = {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
};