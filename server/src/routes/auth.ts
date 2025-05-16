import express from "express";
import { saveSession } from "../services/sessionService";
import { createGroup, findGroupById } from "../services/groupService";

const router = express.Router();

router.post("/create-group", async (req, res) => {
  const { groupId, name, passcode } = req.body;
  try {
    const exsitingGroup = await findGroupById(groupId);
    if (exsitingGroup) {
      return res
        .status(400)
        .json({ message: "このこのグループIDは存在します" });
    }

    const newGroup = await createGroup(groupId, name, passcode);
    return res.status(201).json(newGroup);
  } catch (err) {
    console.error("グループ作成エラー:", err);
    return res.status(500).json({ message: "グループ作成に失敗しました" });
  }
});

router.post("/login", async (req, res) => {
  const { groupId, passcode } = req.body;

  try {
    const group = await findGroupById(groupId);
    if (!group || group.passcode !== passcode) {
      return res
        .status(401)
        .json({ message: "認証失敗: IDまたはパスコードが間違っています" });
    }

    const token = `token-${Date.now()}`;
    await saveSession(groupId, token);
    return res.json({ success: true, token });
  } catch (error) {
    console.error("ログインエラー:", error);
    return res
      .status(500)
      .json({ message: "ログイン中にエラーが発生しました" });
  }
});

export default router;
