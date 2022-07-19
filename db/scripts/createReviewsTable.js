import pool from "../index.js";

async function createReviewsTable() {
  const response = await pool.query(
    `CREATE TABLE reviews (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        review TEXT NOT NULL,
        rating INT check(rating >= 1 AND rating <= 5)
        );`
  );
  console.log(response);
  console.log("Reviews Table Created succesfully");
}

createReviewsTable();
