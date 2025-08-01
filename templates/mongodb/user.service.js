import {User} from '../models/user.model.js';
import {ApiError} from '../utils/ApiError.js';

export const createUserService = async (userData) => {
	const {username, email, fullName, password} = userData;
	const existedUser = await User.findOne({$or: [{username}, {email}]});
	if (existedUser) {
		throw new ApiError(409, 'User with email or username already exists');
	}
	// In a real app, you'd hash the password here before saving!
	const user = await User.create({
		fullName,
		email,
		password,
		username: username.toLowerCase(),
	});
	const createdUser = await User.findById(user._id).select('-password');
	if (!createdUser) {
		throw new ApiError(500, 'Something went wrong while creating the user');
	}
	return createdUser;
};

export const getUserByIdService = async (userId) => {
	const user = await User.findById(userId).select('-password');
	return user;
};
