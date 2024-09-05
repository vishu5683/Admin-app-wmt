const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', password);

  if (error || data.length === 0) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  res.json({ message: 'Login successful', user: data[0] });
});

// Register endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const { data, error } = await supabase
    .from('users')
    .insert([{ username, password }]);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(201).json({ message: 'User registered successfully', user: data[0] });
});

module.exports = router;
