const userService = require('../services/userService');

const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
};

// Créer un nouvel utilisateur
module.exports.createUser = async (req, res) => {
  try {
    const responseFromService = await userService.createUser(req.body);
    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: 'User successfully created',
      body: responseFromService,
    });
  } catch (error) {
    console.error('Error in createUser - userController.js', error);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      status: HTTP_STATUS.BAD_REQUEST,
      message: error.message,
    });
  }
};

// Connecter un utilisateur
module.exports.loginUser = async (req, res) => {
  try {
    const responseFromService = await userService.loginUser(req.body);
    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: 'User successfully logged in',
      body: responseFromService,
    });
  } catch (error) {
    console.error('Error in loginUser - userController.js', error);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      status: HTTP_STATUS.BAD_REQUEST,
      message: error.message,
    });
  }
};

// Obtenir le profil d'un utilisateur
module.exports.getUserProfile = async (req, res) => {
  try {
    const responseFromService = await userService.getUserProfile(req);
    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: 'Successfully got user profile data',
      body: responseFromService,
    });
  } catch (error) {
    console.error('Error in getUserProfile - userController.js', error);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      status: HTTP_STATUS.BAD_REQUEST,
      message: error.message,
    });
  }
};

// Mettre à jour le profil d'un utilisateur
module.exports.updateUserProfile = async (req, res) => {
  try {
    const responseFromService = await userService.updateUserProfile(req);
    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: 'Successfully updated user profile data',
      body: responseFromService,
    });
  } catch (error) {
    console.error('Error in updateUserProfile - userController.js', error);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      status: HTTP_STATUS.BAD_REQUEST,
      message: error.message,
    });
  }
};
