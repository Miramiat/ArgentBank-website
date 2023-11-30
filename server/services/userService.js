const User = require('../database/models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const createUser = async (serviceData) => {
  try {
    const existingUser = await getUserByEmail(serviceData.email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12);

    const newUser = new User({
      email: serviceData.email,
      password: hashPassword,
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      userName: serviceData.userName,
    });

    const result = await newUser.save();

    return result;
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error.message);
  }
};

const getUserProfile = async (jwtToken) => {
  try {
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });

    if (!user) {
      throw new Error('User not found!');
    }

    return user.toObject();
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error.message);
  }
};

const loginUser = async (serviceData) => {
  try {
    const user = await getUserByEmail(serviceData.email);

    if (!user) {
      throw new Error('User not found!');
    }

    const isValid = await bcrypt.compare(serviceData.password, user.password);

    if (!isValid) {
      throw new Error('Password is invalid');
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    );

    return { token };
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error.message);
  }
};

const updateUserProfile = async (jwtToken, newUserName) => {
  try {
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      { userName: newUserName },
      { new: true }
    );

    if (!user) {
      throw new Error('User not found!');
    }

    return user.toObject();
  } catch (error) {
    console.error('Error in userService.js', error);
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserProfile,
  loginUser,
  updateUserProfile,
};
