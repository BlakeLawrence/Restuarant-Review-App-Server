import express from "express";

import {
  addRestuarant,
  deleteRestuarant,
  getAllRestuarants,
  getIndividualRestuarant,
  updateRestuarant,
  getIndividualReview,
  addReview,
} from "../models/restuarants.js";
const router = express.Router();

// GET all restuarants
router.get("/", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const result = await getAllRestuarants();
  res.status(200).json({
    status: "success",
    results: result.rows.length,
    data: {
      restuarants: result.rows,
    },
  });
  next();
});

//GET individual restuarant
router.get("/:id", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const id = Number(req.params.id);
  const restuarant = await getIndividualRestuarant(id);
  const reviews = await getIndividualReview(id);
  res.status(200).json({
    sucess: true,
    payload: { restuarant: restuarant.rows, reviews: reviews.rows },
  });
  next();
});

// CREATE/POST restuarant
router.post("/", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const body = req.body;
  const result = await addRestuarant(body);
  console.log(
    `New restuarant "${result.rows[0].name}", location "${result.rows[0].location}" Created successfully :)`
  );
  console.log(result.rows);
  res.status(201).json({ success: true, payload: result.rows });
  next();
});

// UPDATE restuarant
router.put("/:id", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const id = Number(req.params.id);
  const body = req.body;
  const result = await updateRestuarant(id, body);
  console.log(`Updated restuarant Successfully to:`);
  res.status(200).json({ sucess: true, payload: result.rows });
  console.log(result.rows);
  next();
});

// DELETE a restuarant by id
router.delete("/:id", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const id = Number(req.params.id);
  console.log(id);
  const result = await deleteRestuarant(id);
  res.status(204).json({
    success: true,
  });
  console.log(result);
  console.log(
    `Succesfully deleted restuarant with id ${id}: ${result.rows[0].name}`
  );
  next();
});

// Post a review
router.post("/:id/addReview", async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.id;
  const body = req.body;
  console.log(id);
  console.log(body);
  const result = await addReview(id, body);
  console.log(`New review Added successfully`);
  console.log(result.rows[0]);
  res.status(201).json({ success: true, payload: result.rows });
  next();
});

export default router;
