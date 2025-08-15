// controllers/propertyController.js

import Property from "../models/property.moodel.js";


export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
