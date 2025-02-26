import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from your Vite frontend
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));


app.use("/", routes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
