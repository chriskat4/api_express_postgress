import { pool } from "../db";

export const userGets = async (req,res)=>{
    const { rows } = await pool.query(`SELECT * FROM users'`);
    res.json(rows);
};

export const getUser = async (req,res)=>{
    const {id} = req.params;
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    
    if (rows.length == 0) return res.status(404).json({message: "user not found."});
    
    res.json(rows[0]);
};

export const postUser = async (req,res)=>{
    const data = req.body;

    const { rows } = await pool.query(`INSERT INTO users (name, email) VALUES(${data.name}, ${data.email} RETURNING *)`);
    
    return res.json(rows[0]);
};

export const delUser = async (req,res)=>{
    const {id} = req.params;
    const { rowCount } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

    if (rowCount == 0) return res.status(404).json({message: "user not found."});

    return res.sendStatus(204);
};

export const putUser = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;

    const {rows} = await pool.query(`UPDATE users SET name = ${data.name}, email = ${data.email} WHERE id = ${id} RETURNING *`);

    return res.sendStatus(204).json(rows[0]);
};