// server/src/index.ts
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001; // フロントは3000番、サーバーは3001番にする

app.use(cors());
app.use(express.json());

interface mockGroupData {
  [key: string]: string;
}

const mockGroupData: mockGroupData = {
  group123: "pass123",
  teamA: "secret456",
};

app.get("/", (req, res) => {
  res.send("Expressサーバー動いてるよ！");
});

app.post("/login", (req, res) => {
  const { groupId, passcode } = req.body;

  const validPasscode = mockGroupData[groupId];

  if (validPasscode && validPasscode === passcode) {
    return res.json({ success: true, token: "mock-token-12345" });
  } else {
    return res.status(401).json({ success: false, message: "ログイン失敗" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
