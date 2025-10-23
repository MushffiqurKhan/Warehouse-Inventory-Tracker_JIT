const EventEmitter = require('events');
class StockObserver extends EventEmitter {}

const stockObserver = new StockObserver();

// Listener for low stock event
stockObserver.on('lowStock', (product) => {
  console.log(`⚠️ Restock Alert: Low stock for ${product.name} – only ${product.quantity} left!`);
});

module.exports = stockObserver;
