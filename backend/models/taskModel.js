const { pool } = require('../db');

const addTask = async (task, username) => {
    const query = `INSERT INTO tasks (task, username) VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [task, username]);
    return rows[0];
}

const removeTask = async (id) => {
    const query = 'UPDATE tasks SET isDeleted = true WHERE id=$1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
}

const completeTask = async (id) => {
    const query = 'UPDATE tasks SET isCompleted = true WHERE id=$1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
}

const listTask = async (username) => {
    const query = `SELECT * FROM tasks WHERE username=$1 AND isDeleted=false`;
    const { rows } = await pool.query(query, [username]);
    return rows;
}

module.exports={
    addTask,removeTask,completeTask,listTask
}