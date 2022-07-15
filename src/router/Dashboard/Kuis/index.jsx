import useGlobalState from "../../../globalstate";
import { useEffect } from "react";
import API from "../../../constant";
import { Link as LinkTo } from "react-router-dom";
import {
  Button,
  Container,
  Heading,
  Text,
  Image,
  OrderedList,
  ListItem,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import contohkuis1 from "../../../assets/image/contohkuis1.png";
import contohkuis2 from "../../../assets/image/contohkuis2.png";
export default function Kuis() {
  const { namaKuis, setDataKuis, setIdSoal, setTimer, setJawaban } =
    useGlobalState();
  useEffect(() => {
    if (namaKuis === "Vehicles")
      setDataKuis(`${API.BASE_URL}${API.EASY}&category=28`);
    else if (namaKuis === "General Knowledge")
      setDataKuis(`${API.BASE_URL}${API.MEDIUM}&category=9`);
    else if (namaKuis === "Science: Mathematics")
      setDataKuis(`${API.BASE_URL}${API.HARD}&category=19`);
  }, []);
  return (
    <Container maxW="full">
      <Helmet>
        <title>QWT - Kuis {namaKuis}</title>
      </Helmet>
      <Stack spacing={0}>
        <Text fontSize="xl" fontWeight="bold">
          ✍️ Cara mengerjakan Kuis
        </Text>
        <OrderedList stylePosition={"inside"}>
          <ListItem>Baca kuis dengan teliti</ListItem>
          <ListItem>Pilih jawaban yang menurutmu benar</ListItem>
          <ListItem>
            Kamu bisa menekan tombol "Selanjutnya" untuk melanjutkan
          </ListItem>
          <ListItem>
            Kamu juga bisa menekan tombol "Sebelumnya" untuk kembali ke kuis
            sebelumnya
          </ListItem>
          <ListItem>
            Jika jawaban yang kamu pilih semua menurutmu benar, di akhir kuis
            kamu bisa menekan Selesai
          </ListItem>
          <ListItem>Perhatikan juga waktu yang tersisa</ListItem>
        </OrderedList>
      </Stack>
      <Stack spacing={2} mt={2}>
        <Text fontSize="xl" fontWeight="bold">
          📷 Contoh - Contoh Kuis
        </Text>
        <Image src={contohkuis1} alt="contoh kuis" />
        <Image src={contohkuis2} alt="contoh kuis" />
      </Stack>
      <Box position="sticky" bottom={0} w="full">
        <Button
          as={LinkTo}
          to="mengerjakan"
          color="white"
          bg="accent.50"
          _hover={{ bg: "accent.100" }}
          _active={{ bg: "accent.100" }}
          onClick={() => {
            setIdSoal(0);
            setTimer(300000);
            setJawaban([]);
          }}
          my={4}
          w="full"
          textTransform="uppercase"
        >
          Mulai dengan sekali ketuk
        </Button>
      </Box>
    </Container>
  );
}
