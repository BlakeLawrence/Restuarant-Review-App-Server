import pool from "../index.js";

let initialTable = [
  {
    name: "McDonalds",
    location: "Austin, TX",
    price_range: 3,
  },
  {
    name: "Wendy's",
    location: "Palo Alto, CA",
    price_range: 2,
  },
  {
    name: "Salt Lick Bbq",
    location: "Grand Rapids, MI",
    price_range: 5,
  },
  {
    name: "Jersey Mikes",
    location: "New York, NJ",
    price_range: 3,
  },
];

async function populateTable() {
  for (let i = 0; i < initialTable.length; i++) {
    const response = await pool.query(
      `INSERT INTO restuarants (name, location, price_range) VALUES ($1,$2 ,$3 ) RETURNING *;`,
      [
        initialTable[i].name,
        initialTable[i].location,
        initialTable[i].price_range,
      ]
    );

    console.log(response.rows[0]);
    console.log("Restuarants Table populated succesfully");
  }
}

populateTable();
