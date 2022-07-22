import pool from "../index.js";

async function createReviewsTable() {
  await pool.query(
    `CREATE TABLE reviews (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        restuarant_id BIGINT NOT NULL REFERENCES restuarants(id),
        name VARCHAR(50) NOT NULL,
        review TEXT NOT NULL,
        rating INT NOT NULL check(rating >= 1 AND rating <= 5)
        );`
  );
  console.log("Reviews Table Created succesfully");
}

createReviewsTable();
