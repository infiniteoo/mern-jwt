import asyncHandler from "express-async-handler";

// @desc Auth user & get token
// @route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});


// @desc Register a new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc logout user / clear cookie
// @route POST /api/users/logout
// @access Public

const logoutUser = (req, res) => {
  res.send("logout user");
};

// @desc get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
