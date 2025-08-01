/*
-- SQL to create the users table in your PostgreSQL database:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
*/
import {pool} from '../config/db.js';

export const UserModel = {
	async create({username, email, fullName, password}) {
		const query = {
			text: 'INSERT INTO users(username, email, full_name, password_hash) VALUES($1, $2, $3, $4) RETURNING id, username, email, full_name, created_at',
			values: [username, email, fullName, password], // In a real app, HASH THE PASSWORD!
		};
		const result = await pool.query(query);
		return result.rows[0];
	},
	async findById(id) {
		const result = await pool.query(
			'SELECT id, username, email, full_name, created_at FROM users WHERE id = $1',
			[id]
		);
		return result.rows[0];
	},
	async findByUsernameOrEmail(username, email) {
		const result = await pool.query(
			'SELECT id FROM users WHERE username = $1 OR email = $2',
			[username, email]
		);
		return result.rows[0];
	},
};
