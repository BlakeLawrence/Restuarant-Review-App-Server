import express from "express";
import "dotenv/config";
import cors from "cors";
import restuarantsRouter from "./routes/restuarants.js";

const app = express();

//middleware to unpackage json body
app.use(cors({ origin: "*" }));
app.use(express.json());

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/api/v1/restuarants", restuarantsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});

export default app;
