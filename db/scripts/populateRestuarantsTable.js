import pool from "../index.js";

let initialTable = { name: "McDonalds", location: "New York", price_range: 4 };

async function populateTable() {
  const response = await pool.query(
    `INSERT INTO restuarants (name, location, price_range) VALUES ($1,$2 ,$3 ) RETURNING *;`,
    [initialTable.name, initialTable.location, initialTable.price_range]
  );

  console.log(response.rows[0]);
}

populateTable();
