import Property from "../models/property.model.js";

// create estate
export const create = async (req, res, next) => {
  try {
    const newProperty = await Property.create({
      ...req.body,
      currentOwner: req.userId,
    });

    return res.status(201).json(newProperty);
  } catch (error) {
    next(error);
  }
};


export const getAll = async (req, res, next) => {
  try {
    const properties = await Property.find({});
    return res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};
