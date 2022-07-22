import pool from "../index.js";

let initialReviewsTable = [
  {
    restuarant_id: 1,
    name: "Blake",
    review:
      "Excellent Service, great tasting food and a warm welcoming atmosphere",
    rating: 5,
  },
  {
    restuarant_id: 1,
    name: "Helen",
    review: "really good food",
    rating: 4,
  },
];

async function populateReviewsTable() {
  for (let i = 0; i < initialReviewsTable.length; i++) {
    const response = await pool.query(
      `INSERT INTO reviews (restuarant_id, name, review, rating) VALUES ($1,$2 ,$3, $4 ) RETURNING *;`,

      [
        initialReviewsTable[i].restuarant_id,
        initialReviewsTable[i].name,
        initialReviewsTable[i].review,
        initialReviewsTable[i].rating,
      ]
    );
    console.log(response.rows[0]);
    console.log("Reviews Table populated succesfully");
  }
}

populateReviewsTable();
