import mysql from 'mysql2/promise';

// Create a connection pool, which is more efficient than single connections.
const pool = mysql.createPool({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',
	database: process.env.MYSQL_DATABASE || 'mydatabase',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

const connectDB = async () => {
	try {
		// Get a connection from the pool to test the configuration
		const connection = await pool.getConnection();
		console.log(
			`\n MySQL connected successfully! Connection ID: ${connection.threadId}`
		);
		// Immediately release the connection back to the pool
		connection.release();
	} catch (error) {
		console.error('MYSQL connection FAILED ', error);
		process.exit(1);
	}
};

// Export the pool so it can be used for queries throughout the app
export {pool, connectDB};
