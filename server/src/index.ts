// server/src/index.ts
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();
const PORT = 3001; // フロントは3000番、サーバーは3001番にする

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Expressサーバー動いてるよ！");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
