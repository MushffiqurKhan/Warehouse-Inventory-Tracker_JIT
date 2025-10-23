const ProductService = require('../services/productService');

// Add new product
const addProduct = async (req, res) => {
  try {
    const { name, quantity, threshold } = req.body;
    const result = await ProductService.addProduct({ name, quantity, threshold });

    if (result.status) {
      return res.status(201).send({
        result: 'success',
        message: 'Product added successfully',
        data: result.data,
      });
    } else if (result.exists) {
      return res.status(409).send({
        result: 'fail',
        message: `Product '${result.exists}' already exists`,
      });
    } else {
      return res.status(400).send({
        result: 'fail',
        message: result.error || 'Validation error',
      });
    }
  } catch (error) {
    return res.status(500).send({
      result: 'fail',
      message: 'Error adding product',
      error: error.message,
    });
  }
};

//  Receive shipment (increase quantity)
const receiveShipment = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const result = await ProductService.receiveShipment(id, quantity);

    if (result.status) {
      return res.status(200).send({
        result: 'success',
        message: 'Shipment received successfully',
        data: result.data,
      });
    } else {
      return res.status(400).send({
        result: 'fail',
        message: result.error || 'Unable to process shipment',
      });
    }
  } catch (error) {
    return res.status(500).send({
      result: 'fail',
      message: 'Error receiving shipment',
      error: error.message,
    });
  }
};

// Fulfill order (decrease quantity)
const fulfillOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const result = await ProductService.fulfillOrder(id, quantity);

    if (result.status) {
      return res.status(200).send({
        result: 'success',
        message: 'Order fulfilled successfully',
        data: result.data,
      });
    } else {
      return res.status(400).send({
        result: 'fail',
        message: result.error || 'Unable to fulfill order',
      });
    }
  } catch (error) {
    return res.status(500).send({
      result: 'fail',
      message: 'Error fulfilling order',
      error: error.message,
    });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const result = await ProductService.getAllProducts();

    if (result.status) {
      return res.status(200).send({
        result: 'success',
        message: 'Products fetched successfully',
        data: result.data,
      });
    } else {
      return res.status(400).send({
        result: 'fail',
        message: result.error || 'Unable to fetch products',
      });
    }
  } catch (error) {
    return res.status(500).send({
      result: 'fail',
      message: 'Error fetching products',
      error: error.message,
    });
  }
};

module.exports = {
  addProduct,
  receiveShipment,
  fulfillOrder,
  getAllProducts,
};
