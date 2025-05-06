import express from "express";
import { saveSession } from "../services/sessionService";

const router = express.Router();

interface mockGroupData {
  [key: string]: string;
}

const mockGroupData: mockGroupData = {
  group123: "pass123",
  teamA: "secret456",
};

export default router.post("/login", async (req, res) => {
  const { groupId, passcode } = req.body;

  const validPasscode = mockGroupData[groupId];

  if (validPasscode && validPasscode === passcode) {
    const token = "mock-token-12345"; //仮のトークン　ランダムにする
    await saveSession(groupId, token);
    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ success: false, message: "ログイン失敗" });
  }
});
