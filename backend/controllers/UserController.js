const User = require('../models/UserModel');

//create user
const registerUser = async (req , res)=>{
      try{
            const newUser = new User(req.body);
            await newUser.save();
            res.status(201).json(newUser);
      }catch(error){
            res.status(400).json({message:error.message});
      }
}

// Get all users
const getUsers = async (req, res) => {
      try {
          const users = await User.find();
          res.status(200).json(users);
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  };


// Get user by ID
const getUserById = async (req, res) => {
      try {
          const user = await User.findById(req.params.id);
          if (!user) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.status(200).json(user);
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  };

  // Update user
const updateUser = async (req, res) => {
      try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
          res.status(200).json(updatedUser);
      } catch (error) {
          res.status(400).json({ message: 'user not found' });
      }
  };
  
  // Delete user
  const deleteUser = async (req, res) => {
      try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  };


module.exports = { registerUser, getUsers,getUserById,updateUser, deleteUser};