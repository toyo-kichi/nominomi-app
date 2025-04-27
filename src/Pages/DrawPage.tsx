import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const categories = ["場所", "テーマ", "禁止ワード", "ドレスコード"];

const firstData = {
  場所: "居酒屋",
  テーマ: "謎の王様ゲーム風",
  禁止ワード: "仕事",
  ドレスコード: "スーツ",
};
const sampleData = {
  場所: ["居酒屋", "バー", "公園", "カラオケ"],
  テーマ: ["謎の王様ゲーム風", "全員タメ口", "片言日本語縛り"],
  禁止ワード: ["仕事", "結婚", "疲れた"],
  ドレスコード: ["スーツ", "帽子", "上下逆コーデ"],
};

const DrawPage = () => {
  const [results, setResults] = useState<{ [key: string]: string }>(firstData);
  const [loading, setRoading] = useState(false);

  const handleDraw = () => {
    setRoading(true);

    setTimeout(() => {
      const newResults: { [key: string]: string } = {};
      categories.forEach((cat) => {
        const options = sampleData[cat]; //sampleDataのキーは本当にstring?って怒られている　型をしっかり定義するのもあり 場所とかテーマとか
        const ramdom = options[Math.floor(Math.random() * options.length)];
        newResults[cat] = ramdom;
      });
      setResults(newResults);
      setRoading(false);
    }, 2000);
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="yellow.50">
      <Box
        p={8}
        bg="white"
        maxW="lg"
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="2xl"
      >
        <Heading textAlign="center" mb={10} fontSize="3xl">
          今日のくじ
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 2 }} gap={6}>
          {categories.map((cat) => (
            <Box
              key={cat}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              minH="150px"
              // p={4}
            >
              <Flex align="center" justify="center" direction="column" h="full">
                <Text fontWeight="bold" mb={2}>
                  {cat}
                </Text>
                <Text fontSize="xl" color="teal.500" wordBreak="break-word">
                  {loading ? "..." : results[cat] || "?"}
                </Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        <VStack mt={6} gap={4}>
          <Button
            colorPalette="teal"
            size="lg"
            w="full"
            borderRadius="3xl"
            boxShadow="md"
            fontWeight="extrabold"
            onClick={handleDraw}
            loading={loading}
            cursor={loading ? "default" : "pointer"}
          >
            今日のくじを引く！
          </Button>
          <Button
            variant="outline"
            colorPalette="gray"
            size="lg"
            w="full"
            borderRadius="3xl"
            boxShadow="md"
          >
            過去の履歴
          </Button>
          <Button
            variant="outline"
            colorPalette="gray"
            size="md"
            w="full"
            borderRadius="3xl"
            boxShadow="md"
          >
            くじの内容をカスタマイズする
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};
export default DrawPage;
