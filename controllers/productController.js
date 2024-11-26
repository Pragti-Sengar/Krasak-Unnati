const client = require('../config/db');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const result = await client.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
      [name, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ message: 'Error adding product' });
  }
};

// Search product by name
exports.searchProductByName = async (req, res) => {
    const { name } = req.query;
  
    if (!name) {
      return res.status(400).json({ message: 'Product name is required' });
    }
  
    try {
      console.log(`Searching for products with name: ${name}`); // Debug log
      const query = 'SELECT * FROM products WHERE name ILIKE $1';
      const values = [`%${name}%`];
      console.log(`Executing query: ${query} with values: ${values}`); // Debug log
  
      const result = await client.query(query, values);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(result.rows);
    } catch (err) {
      console.error('Error searching for product:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };