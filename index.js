const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoute.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

// Routes
app.use('/api/products', productRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
