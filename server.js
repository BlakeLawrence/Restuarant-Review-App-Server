import express from "express";
import "dotenv/config";
import cors from "cors";
import restuarantsRouter from "./routes/restuarants.js";

const app = express();

//middleware to unpackage json body
app.use(cors({ origin: "https://restuarant-reviews.netlify.app" }));
app.use(express.json());

app.use("/api/v1/restuarants", restuarantsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});

export default app;
