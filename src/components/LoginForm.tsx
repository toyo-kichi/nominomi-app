import { useState } from "react";

import { Link as RouterLink } from "react-router-dom"; // 追加
import { login } from "@/api/auth";
import { Box, Button, Input, Link, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [groupId, setGroupId] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const token = await login(groupId, passcode);
      console.log("ログイン成功！、トークン:", token);
      navigate("/draw");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <VStack gap={6} w="full">
      <Box w="full">
        <Text>グループID</Text>
        <Input
          placeholder="グループIDを入力"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
        />
      </Box>
      <Box w="full">
        <Text>パスコード</Text>
        <Input
          type="password"
          placeholder="パスコードを入力"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
        />
      </Box>
      <Button
        colorPalette="teal"
        size="lg"
        w="full"
        borderRadius="3xl"
        boxShadow="md"
        fontWeight="extrabold"
        onClick={handleLogin}
      >
        ログインする
      </Button>
      {error && (
        <Text color="red.500" mt={2} textAlign="center">
          {error}
        </Text>
      )}
      <Text>
        グループをまだお持ちでない方は{""}
        <RouterLink
          to="/create-group"
          style={{ color: "teal", fontWeight: "bold" }}
        >
          新規グループ作成
        </RouterLink>
      </Text>
    </VStack>
  );
};
