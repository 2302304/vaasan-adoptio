import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adoptionRoutes from "./routes/adoptions.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Reitit
app.use("/adoptions", adoptionRoutes);

// Testireitti
app.get("/ping", (req, res) => {
  res.json({ message: "Server B is running ✅" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server B running on port ${PORT}`);
});
