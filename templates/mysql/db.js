import {Pool} from 'pg';

const pool = new Pool({
	connectionString: process.env.POSTGRES_URI,
});

const connectDB = async () => {
	try {
		await pool.query('SELECT NOW()'); // Test connection
		console.log('\n PostgreSQL connected successfully!');
	} catch (error) {
		console.error('POSTGRESQL connection FAILED ', error);
		process.exit(1);
	}
};

export {pool, connectDB};
