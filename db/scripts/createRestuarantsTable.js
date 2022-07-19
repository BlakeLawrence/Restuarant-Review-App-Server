import pool from "../index.js";

async function createTable() {
  const response = await pool.query(
    `CREATE TABLE restuarants (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        location VARCHAR(50) NOT NULL,
        price_range INT NOT NULL check(price_range >= 1 AND price_range <= 5)
        );`
  );

  console.log(response);
}

createTable();
