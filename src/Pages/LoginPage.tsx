import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const LoginPage = () => {
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
        <Heading textAlign="center" mb={8} fontSize="3xl">のみのみアプリ</Heading>
        <VStack gap={6} w="full">
          <Box w="full">
            <Text>グループID</Text>
            <Input placeholder="グループIDを入力" />
          </Box>
          <Box w="full">
            <Text >パスコード</Text>
            <Input type="password" placeholder="パスコードを入力" />
          </Box>
          <Button
            colorPalette="teal"
            size="lg"
            w="full"
            borderRadius="3xl"
            boxShadow="md"
            fontWeight="extrabold"
          >
            ログインする
          </Button>
        </VStack>
        {/* ここにエラー出す場所（仮） */}
        <Text color="red" mt={2} textAlign="center">ログインに失敗しました</Text>
      </Box>
    </Flex>
  );
};

export default LoginPage;
