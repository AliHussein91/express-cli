import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {
	createUserService,
	getUserByIdService,
} from '../services/user.service.js';

const createUser = asyncHandler(async (req, res) => {
	const {username, email, fullName, password} = req.body;
	if (
		[username, email, fullName, password].some(
			(field) => !field || field.trim() === ''
		)
	) {
		throw new ApiError(400, 'All fields are required');
	}
	const user = await createUserService({username, email, fullName, password});
	return res
		.status(201)
		.json(new ApiResponse(201, user, 'User created successfully'));
});

const getUserById = asyncHandler(async (req, res) => {
	const {userId} = req.params;
	const user = await getUserByIdService(userId);
	if (!user) {
		throw new ApiError(404, 'User not found');
	}
	return res
		.status(200)
		.json(new ApiResponse(200, user, 'User fetched successfully'));
});

export {createUser, getUserById};
