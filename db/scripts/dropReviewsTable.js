import pool from "../index.js";

async function dropReviewsTable() {
  const response = await pool.query(`DROP TABLE IF EXISTS reviews;`);

  console.log(response);
  console.log("Reviews Table dropped succesfully");
}

dropReviewsTable();
