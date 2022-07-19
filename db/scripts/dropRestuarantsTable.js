import pool from "../index.js";

async function dropTable() {
  await pool.query(`DROP TABLE IF EXISTS restuarants;`);

  console.log("Restuarants table dropped succesfully");
}

dropTable();
