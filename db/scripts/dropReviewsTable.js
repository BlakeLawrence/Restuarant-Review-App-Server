import pool from "../index.js";

async function dropReviewsTable() {
  await pool.query(`DROP TABLE IF EXISTS reviews;`);
  console.log("Reviews Table dropped succesfully");
}

dropReviewsTable();
