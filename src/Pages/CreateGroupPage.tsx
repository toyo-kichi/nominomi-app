import { createGroup } from "@/api/group";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateGroupPage = () => {
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCreate = async () => {
    setError("");
    try {
      await createGroup(groupId, groupName, passcode);
      navigate("/draw");
    } catch (err) {
      setError("作成に失敗しました");
    }
  };

  return (
    <Flex align="center" justify="center" minH="100vh" bg="yellow.50">
      <Box
        p={8}
        bg="white"
        maxW="lg"
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="2xl"
      >
        <Heading textAlign="center" mb={8} fontSize="3xl">
          グループ作成
        </Heading>
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
            <Text>グループ名</Text>
            <Input
              placeholder="グループ名を入力"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
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
            onClick={handleCreate}
          >
            登録する
          </Button>
          {error && (
            <Text color="red.500" mt={2} textAlign="center">
              {error}
            </Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
};
