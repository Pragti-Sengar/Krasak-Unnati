const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const client = require('./config/db');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use product routes
app.use('/products', productRoutes);

// Sample root route
app.get('/', (req, res) => {
  res.send('Welcome to the Products API');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
  
  // Check database connection
  client.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error running query', err);
    } else {
      console.log('Current time from database:', res.rows[0]);
    }
  });
});
