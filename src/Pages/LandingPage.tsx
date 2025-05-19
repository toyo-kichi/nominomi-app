import {
  Accordion,
  AccordionItem,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HelpCircle, History, Settings, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* ヒーローアクション */}
      <Box bg="teal.500" color="white" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading size="2xl" fontWeight="extrabold">
            のみのみアプリ
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

      {/* このアプリでできること */}
      <Box py={16} bg="white">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={6}>
            このアプリでできること
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {[
              {
                title: "ランダムに抽選できるくじ引き機能",
                description: "公平で楽しい抽選ができるくじ引き機能を提供します",
                icon: <Users size={40} color="teal" />,
              },
              {
                title: "くじの内容カスタマイズ機能",
                description: "グループに合ったくじ内容にカスタムできます",
                icon: <Settings size={40} color="teal" />,
              },
              {
                title: "履歴の保存と再抽選機能",
                description: "過去の抽選結果を保存し、いつでも再抽選可能",
                icon: <History size={40} color="teal" />,
              },
            ].map((feature, idx) => (
              <Box
                key={idx}
                p={6}
                borderWidth="1px"
                borderRadius="xl"
                boxShadow="md"
                textAlign="center"
              >
                <Box display="flex" justifyContent="center" mb={3}>
                  {feature.icon}
                </Box>
                <Heading size="md" mb={3}>
                  ✅{feature.title}
                </Heading>
                <Text color="gray.600">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 使い方 */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.md">
          <Heading textAlign="center" mb={6}>
            使い方はカンタン 3 ステップ
          </Heading>
          <VStack gap={6} align="stretch">
            {[
              "1. グループを作成してパスコードを共有",
              "2. 参加者の名前を登録",
              "3. 抽選ボタンを押すだけ！",
            ].map((step, idx) => (
              <Box
                key={idx}
                p={4}
                borderLeft="4px solid teal"
                bg="white"
                borderRadius="xl"
                shadow="sm"
              >
                <Text fontSize="lg">{step}</Text>
              </Box>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* ユーザーの声 */}
      <Box py={16} bg="white">
        <Container maxW="container.lg">
          <Heading mb={6} textAlign="center">
            ユーザーの声📣
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {[
              {
                name: "たかし（28）",
                comment: "飲み会の幹事が楽になりました！くじで盛り上がります！",
              },
              {
                name: "さゆり（32）",
                comment: "スマホから簡単に使えるのが最高。リピ確定！",
              },
              {
                name: "ケンタ（25）",
                comment: "グループIDで管理できるのが便利です！",
              },
            ].map((user, idx) => (
              <Box
                key={idx}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="xl"
              >
                <Text fontWeight="bold" mb={2}>
                  {user.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {user.comment}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* よくある質問 */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.md">
          <HStack gap={2} mb={6} justify="center" align="center">
            <Heading mb={0} textAlign="center">
              よくある質問
            </Heading>
            <HelpCircle size={24} color="#319795" />
          </HStack>
          <Accordion.Root collapsible>
            {[
              {
                q: "ログインには何が必要ですか？",
                a: "グループIDとパスコードのみでログインできます。",
              },
              {
                q: "スマホからでも使えますか？",
                a: "もちろん！スマホ・PCどちらからでも利用可能です。",
              },
              {
                q: "登録情報はどれくらい保存されますか？",
                a: "現在はセッションがある間のみ保存されます。将来的には履歴保存も検討中です。",
              },
            ].map((faq, idx) => (
              <Accordion.Item key={idx} value={faq.q}>
                <Accordion.ItemTrigger>
                  <Span flex="1">{faq.q}</Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{faq.a}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Container>
      </Box>

      {/* 最後のCTA */}
      <Box bg="teal.500" color="white" py={14} textAlign="center">
        <Container maxW="container.md">
          <Heading size="2xl">さっそく使ってみよう！</Heading>
          <Text mt={2}>ログインするか、グループを新しく作成できます。</Text>
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
