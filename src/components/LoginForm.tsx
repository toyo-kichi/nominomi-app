import { login } from "@/api/auth";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
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
      setError(err.message)
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
    </VStack>
  );
};
