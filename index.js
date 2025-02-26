import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.use("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
