import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box bg="teal.500" color="white" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading size="2xl" fontWeight="extrabold">
            のみのみ
          </Heading>
          <Text fontSize="xl" mt={4}>
            飲み会をもっと楽しく。スマートに。
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            mt={6}
            gap={4}
            justify="center"
          >
            <Button
              size="lg"
              colorScheme="teal"
              bg="white"
              color="teal.600"
              borderRadius="3xl"
              boxShadow="md"
              fontWeight="extrabold"
              onClick={() => navigate("/login")}
            >
              ログイン
            </Button>
            <Button
              size="lg"
              colorScheme="teal"
              bg="white"
              color="teal.600"
              borderRadius="3xl"
              boxShadow="md"
              fontWeight="extrabold"
              onClick={() => navigate("/create-group")}
            >
              新規グループ作成
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
