import express from "express";
import cors from "cors"; 
import routes from "./routes/user.js";
import trips from "./routes/trips.js";
const app = express();
import "dotenv/config"

const { PORT, BACKEND_URL, CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN })); 
app.use(express.json());
app.use(express.static('public/images'));

app.route("/")
  .get((req, res) => {res.status(200).json("Works!")})

  app.use("/user", routes);
  app.use("/", trips);


app.listen(PORT || 8000, () => {
    console.log(`running on ${PORT || 8000}`);
})