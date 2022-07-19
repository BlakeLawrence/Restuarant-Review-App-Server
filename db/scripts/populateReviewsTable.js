import pool from "../index.js";

let initialReviewsTable = {
  name: "Blake",
  review:
    "Excellent Service, great tasting food and a warm welcoming atmosphere",
  rating: 5,
};

async function populateReviewsTable() {
  const response = await pool.query(
    `INSERT INTO reviews (name, review, rating) VALUES ($1,$2 ,$3 ) RETURNING *;`,
    [
      initialReviewsTable.name,
      initialReviewsTable.review,
      initialReviewsTable.rating,
    ]
  );
  console.log(response);
  console.log("Reviews Table populated succesfully");
}

populateReviewsTable();
