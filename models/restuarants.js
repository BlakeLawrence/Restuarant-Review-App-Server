import pool from "../db/index.js";

//Gets all restuarants
export async function getAllRestuarants() {
  const result = await pool.query("SELECT * FROM restuarants");
  return result;
}

// Get individual restuarant
export async function getIndividualRestuarant(id) {
  const result = await pool.query("SELECT * FROM restuarants WHERE id = $1;", [
    id,
  ]);
  return result;
}
// Get individual Review
export async function getIndividualReview(id) {
  const result = await pool.query(
    "SELECT * FROM reviews WHERE restuarant_id = $1;",
    [id]
  );
  return result;
}

// Add restuarant
export async function addRestuarant(body) {
  const result = await pool.query(
    "INSERT INTO restuarants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;",
    [body.name, body.location, body.price_range]
  );
  return result;
}

// Update restuarant
export async function updateRestuarant(id, body) {
  const result = await pool.query(
    "UPDATE restuarants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *;",
    [body.name, body.location, body.price_range, id]
  );
  return result;
}
// Delete restuarant
export async function deleteRestuarant(id) {
  const result = await pool.query(
    "DELETE FROM restuarants WHERE id = $1 RETURNING *;",
    [id]
  );
  return result;
}

// Add a review
export async function addReview(id, body) {
  const result = await pool.query(
    "INSERT INTO reviews (restuarant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;",
    [id, body.name, body.review, body.rating]
  );
  return result;
}
