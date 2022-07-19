import pool from "../index.js";

async function dropTable() {
  const response = await pool.query(`DROP TABLE IF EXISTS restuarants;`);

  console.log(response);
}

dropTable();
