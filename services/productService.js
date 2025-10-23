const Product = require('../models/productModel');
const stockObserver = require('../observer/stockObserver');

const productService = {
  // ✅ Add Product
  addProduct: async ({ name, quantity, threshold }) => {
    try {
      const existingProduct = await Product.findOne({ name });
      if (existingProduct) {
        return { status: false, exists: name };
      }

      const product = new Product({ name, quantity, threshold });
      await product.save();

      return { status: true, data: product };
    } catch (error) {
      console.error('Error adding product:', error.message);
      return {
        status: false,
        error: error.message.includes('validation')
          ? error.message
          : 'Something went wrong',
      };
    }
  },

  // ✅ Receive Shipment (increase quantity)
  receiveShipment: async (id, quantity) => {
    try {
      const product = await Product.findById(id);
      if (!product) {
        return { status: false, error: 'Product not found' };
      }

      product.quantity += quantity;
      await product.save();

      return { status: true, data: product };
    } catch (error) {
      console.error('Error receiving shipment:', error.message);
      return { status: false, error: 'Something went wrong' };
    }
  },

  // ✅ Fulfill Order (decrease quantity)
  fulfillOrder: async (id, quantity) => {
    try {
      const product = await Product.findById(id);
      if (!product) {
        return { status: false, error: 'Product not found' };
      }

      if (product.quantity < quantity) {
        return { status: false, error: 'Insufficient stock' };
      }

      product.quantity -= quantity;
      await product.save();

      if (product.quantity < product.threshold) {
        stockObserver.emit('lowStock', product);
      }

      return { status: true, data: product };
    } catch (error) {
      console.error('Error fulfilling order:', error.message);
      return { status: false, error: 'Something went wrong' };
    }
  },

  // ✅ Get All Products
  getAllProducts: async () => {
    try {
      const products = await Product.find();
      return { status: true, data: products };
    } catch (error) {
      console.error('Error fetching products:', error.message);
      return { status: false, error: 'Something went wrong' };
    }
  },
};

module.exports = productService;
