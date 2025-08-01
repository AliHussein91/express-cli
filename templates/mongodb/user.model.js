import mongoose, {Schema} from 'mongoose';
// In a real app, you'd add a pre-save hook for password hashing
// import bcrypt from 'bcrypt';

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			index: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		fullName: {type: String, required: true, trim: true, index: true},
		password: {type: String, required: [true, 'Password is required']},
	},
	{timestamps: true}
);

export const User = mongoose.model('User', userSchema);
