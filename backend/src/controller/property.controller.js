import Property from '../models/property.model.js';

// CREATE a new property
export const createProperty = async (req, res) => {
  try {
    const property = await Property.create({ ...req.body, user: req.user._id });
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create property', error: err.message });
  }
};

// GET all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate('user', 'fullName email');
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch properties', error: err.message });
  }
};

// GET property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('user', 'fullName email');
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching property', error: err.message });
  }
};

// UPDATE property
export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });

    // Optional: Check if the logged-in seller is the owner
    if (property.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updated = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update property', error: err.message });
  }
};

// DELETE property
export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });

    // Optional: Check if the logged-in seller is the owner
    if (property.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete property', error: err.message });
  }
};
