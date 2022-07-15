import useGlobalState from "../../../globalstate";
import { Link as LinkTo } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { nama, setNamaKuis, timer, setTimer } = useGlobalState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [judulDipilih, setJudulDipilih] = useState("");
  const navigate = useNavigate();

  function ResumeAlert() {
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="lg"
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Melanjutkan?
            </AlertDialogHeader>
            <AlertDialogBody>
              Anda memiliki riwayat yang belum diselesaikan. Apakah anda ingin
              melanjutkanya?
            </AlertDialogBody>
            <AlertDialogFooter>
              <HStack>
                <Button
                  as={LinkTo}
                  to="kuis"
                  color="white"
                  bg="blue.400"
                  _hover={{ bg: "blue.500 " }}
                  _active={{ bg: "blue.500" }}
                  onClick={() => {
                    onClose();
                    setTimer(0);
                    setNamaKuis(judulDipilih);
                  }}
                >
                  Tidak
                </Button>
                <Button
                  as={LinkTo}
                  to="kuis/mengerjakan"
                  color="white"
                  bg="accent.50"
                  _hover={{ bg: "accent.100 " }}
                  _active={{ bg: "accent.100" }}
                  onClick={onClose}
                >
                  Ya
                </Button>
              </HStack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }

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
              if (timer > 0) {
                onOpen();
                setJudulDipilih(category);
              } else {
                setNamaKuis(category);
                navigate("kuis");
              }
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
    <Container maxW="full">
      <Helmet>
        <title>QWT - Dashboard</title>
      </Helmet>
      <Stack spacing={3}>
        <Text fontSize="3xl" fontWeight="bold">
          Hi, {nama || "Guest"}
        </Text>
        <Kuis judul="😁 Versi Mudah" category="Vehicles" />
        <Kuis judul="😲 Versi Sedang" category="General Knowledge" />
        <Kuis judul="😍 Versi Susah" category="Science: Mathematics" />
      </Stack>
      <ResumeAlert />
    </Container>
  );
}
