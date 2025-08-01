/*
-- SQL to create the users table in your MySQL database:
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
*/
import {pool} from '../config/db.js';

export const UserModel = {
	async create({username, email, fullName, password}) {
		const sql =
			'INSERT INTO users (username, email, full_name, password_hash) VALUES (?, ?, ?, ?)';
		const [result] = await pool.query(sql, [
			username,
			email,
			fullName,
			password,
		]); // In a real app, HASH THE PASSWORD!
		return this.findById(result.insertId);
	},
	async findById(id) {
		const [rows] = await pool.query(
			'SELECT id, username, email, full_name, created_at FROM users WHERE id = ?',
			[id]
		);
		return rows[0];
	},
	async findByUsernameOrEmail(username, email) {
		const [rows] = await pool.query(
			'SELECT id FROM users WHERE username = ? OR email = ?',
			[username, email]
		);
		return rows[0];
	},
};
