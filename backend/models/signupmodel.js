const pool = require("../db");

const findUser = async (username) => {
  const query = `SELECT * FROM USERS WHERE username=$1`;
  const { rows } = await pool.query(query,[username]);
  return rows[0];
};

const createUser=async({username,nickname,password})=>{
const query=`INSERT INTO USERS (USERNAME,NICKNAME,PASSWORD)VALUES ($1,$2,$3) RETURNING USERNAME ,NICKNAME`;
const {rows}=await pool.query(query,[username,nickname,password]);
return rows[0];
}
module.exports={
    findUser,createUser
};