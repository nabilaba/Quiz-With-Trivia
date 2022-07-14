import useGlobalState from "../../../globalstate";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import API from "../../../constant";
export default function Home() {
  const { nama, easy, medium, hard, setEasy, setMedium, setHard } =
    useGlobalState();

  useEffect(() => {
    setEasy(`${API.BASE_URL}${API.EASY}`);
    setMedium(`${API.BASE_URL}${API.MEDIUM}`);
    setHard(`${API.BASE_URL}${API.HARD}`);
  }, []);

  const Kuis = ({ judul, category }) => {
    return (
      <Stack borderRadius="md" pr={2} borderColor="accent.50">
        <Text fontSize="xl" fontWeight="bold">
          • {judul}
        </Text>
        <SimpleGrid columns={1} spacingX={2} spacingY={2}>
          <Box
            cursor="pointer"
            bg="blackAlpha.800"
            color={"white"}
            borderRadius={"md"}
            h="250px"
            justify="center"
            role={"group"}
            onClick={() => {
              alert("Kamu memilih: " + judul);
            }}
          >
            <Stack
              spacing={2}
              h="full"
              bgPosition="center"
              bgRepeat="no-repeat"
              align="center"
              justify="space-between"
            >
              <Stack align="center" justifyContent="center" h="full">
                <Heading
                  fontSize="xl"
                  fontWeight="bold"
                  transition={"all 0.3s"}
                  _groupHover={{
                    transform: "scale(1.1)",
                  }}
                >
                  {category}
                </Heading>
              </Stack>
              <HStack
                mt="auto"
                bg="accent.100"
                w="full"
                borderBottomRadius={"md"}
                p={2}
              >
                <Text
                  fontWeight="bold"
                  bg="white"
                  borderRadius={"full"}
                  color="black"
                  px={2}
                >
                  5 Soal
                </Text>
                <Text
                  fontWeight="bold"
                  bg="white"
                  borderRadius={"full"}
                  color="black"
                  px={2}
                >
                  English
                </Text>
                <Text
                  fontWeight="bold"
                  bg="white"
                  borderRadius={"full"}
                  color="black"
                  px={2}
                >
                  Pilihan Ganda
                </Text>
              </HStack>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    );
  };

  return (
    <Container maxW="full" p={4}>
      <Helmet>
        <title>QWT - Dashboard</title>
      </Helmet>
      <Stack spacing={3}>
        <Text fontSize="3xl" fontWeight="bold">
          Hi, {nama || "Guest"}
        </Text>
        <Kuis judul="😁 Versi Mudah" category="Easy" />
        <Kuis judul="😲 Versi Sedang" category="Medium" />
        <Kuis judul="😍 Versi Susah" category="Hard" />
      </Stack>
    </Container>
  );
}
