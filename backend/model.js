// model.js

const pool = require('./db');

// --- CORRECTED SQL QUERY ---
const createTableQuery = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS users (
        username VARCHAR(50) PRIMARY KEY,
        nickname VARCHAR(50),
        password VARCHAR(225)
    );

    CREATE TABLE IF NOT EXISTS tasks (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        task VARCHAR(200),
        isCompleted BOOLEAN DEFAULT FALSE,
        isDeleted BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        username VARCHAR(50) REFERENCES users(username) ON DELETE CASCADE
    );
`;

const setupDatabase = async () => {
    const client = await pool.connect(); 
    try {
        await client.query('BEGIN');
        await client.query(createTableQuery);
        await client.query('COMMIT');
        console.log("✅ Transaction complete: Tables created successfully!");
    } catch (err) {
        await client.query('ROLLBACK');
        console.error("❌ Error while creating tables, transaction rolled back.", err);
    } finally {
        client.release();
        await pool.end();
    }
};

setupDatabase();