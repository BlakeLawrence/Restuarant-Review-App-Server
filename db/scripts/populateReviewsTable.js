import pool from "../index.js";

let initialReviewsTable = [
  {
    restuarant_id: 1,
    name: "Blake",
    review: "Cheap and cheerful",
    rating: 3,
  },
  {
    restuarant_id: 2,
    name: "Helen",
    review: "Not too bad",
    rating: 3,
  },
  {
    restuarant_id: 3,
    name: "Isaac",
    review: "really good food, amazing service (a little expensive though)",
    rating: 4,
  },
  {
    restuarant_id: 4,
    name: "Jill",
    review: "That cheese pull though 🧀🥰",
    rating: 5,
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
