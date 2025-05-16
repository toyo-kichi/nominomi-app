import { LoginForm } from "@/components/LoginForm";
import { Box, Flex, Heading } from "@chakra-ui/react";

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
        <Heading textAlign="center" mb={8} fontSize="3xl">
          のみのみアプリ
        </Heading>
        <LoginForm />
      </Box>
    </Flex>
  );
};

export default LoginPage;
