# 🏭 Warehouse Inventory Tracker (Event-Based)

A backend application built using **Node.js**, **Express.js**, and **MongoDB** that manages real-time warehouse inventory updates.  
It simulates an **event-driven system** where stock levels are updated when shipments arrive or customer orders are fulfilled — automatically triggering low-stock alerts when quantities fall below predefined thresholds.

---

## 🚀 Features

✅ **Add New Products** — Dynamically add new products with quantity and threshold levels.  
✅ **Receive Shipments** — Increase stock levels when new shipments arrive.  
✅ **Fulfill Orders** — Decrease stock levels when customer orders are fulfilled.  
✅ **Low Stock Alert System** — Automatically generates a restock alert when quantity drops below the threshold.  
✅ **Modular MVC Architecture** — Clean separation between routes, controllers, and services.  
✅ **Error Handling** — Graceful and consistent responses for invalid product IDs or insufficient stock.  
✅ **Scalable Design** — Easy to extend for multiple warehouses or persistent storage in the future.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Architecture** | MVC (Model-View-Controller) |
| **API Testing** | Postman |
| **Language** | JavaScript (ES5 syntax with CommonJS `require`) |

---

## 📂 Folder Structure

warehouse-inventory-tracker/
│
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection setup
│ │
│ ├── models/
│ │ └── productModels.js # Product schema (name, quantity, threshold)
│ │
│ ├── Service/
│ │ └── productService.js # Business logic (receiveShipment, fulfillOrder)
│ │
│ ├── controllers/
│ │ └── productController.js # Handles API responses and messages
│ │
│ ├── routes/
│ │ └── productRoute.js # API endpoints
│ │
│ ├── index.js # Entry point, server setup, route linking
│ └── package.json

🧭 Project Flow Explanation
Frontend / Postman
      ↓
Routes (productRoute.js)
      ↓
Controller (productController.js)
  ├── Validates Request
  ├── Calls productService.js methods
  └── Sends Success/Error response
      ↓
Service (productService.js)
  ├── Interacts with Product Model
  ├── Updates stock quantity
  ├── Checks threshold
  └── Returns data or alert
      ↓
Model (productModels.js)
  └── Defines product schema in MongoDB
💡 Future Enhancements

🔔 Implement Observer Pattern / EventEmitter for real-time stock alerts.

🧵 Add multithreading or queue system for concurrent updates.

💾 Persist inventory state in a text or JSON file.

🌍 Support multiple warehouses with unique IDs.

🧠 Integrate email/SMS notifications using Nodemailer or Twilio.
