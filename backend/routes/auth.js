const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');

// POST /api/register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password: await bcrypt.hash(password, 5)
        });

        await user.save();

        res.status(200).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
router.post('/login', async (req, res) => {
      const { email, password } = req.body;
  
      try {
          // Check if user exists
          let user = await User.findOne({ email });
          if (!user) {
              return res.status(400).json({ msg: 'Invalid email or password' });
          }
  
          // Compare the entered password with the hashed password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
              return res.status(400).json({ msg: 'Invalid email or password' });
          }
  
          res.status(200).json({ msg: 'Login successful', user: { id: user._id, name: user.name, email: user.email } });
      } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
      }
  });



module.exports = router;