import useGlobalState from "../../../globalstate";
import { useEffect } from "react";
import API from "../../../constant";
import { Link as LinkTo } from "react-router-dom";
import { Button, Container, Heading } from "@chakra-ui/react";
export default function Kuis() {
  const { namaKuis, setDataKuis, dataKuis } = useGlobalState();
  useEffect(() => {
    if (namaKuis === "Vehicles")
      setDataKuis(`${API.BASE_URL}${API.EASY}&category=28`);
    else if (namaKuis === "General Knowledge")
      setDataKuis(`${API.BASE_URL}${API.MEDIUM}&category=9`);
    else if (namaKuis === "Science: Mathematics")
      setDataKuis(`${API.BASE_URL}${API.HARD}&category=19`);
  }, []);

  console.log(dataKuis);

  return (
    <Container maxW="full" p={4}>
      <Heading fontSize="3xl" fontWeight="bold">
        Hi, {namaKuis || "Guest"}
      </Heading>
      <Button
        as={LinkTo}
        to="no=1"
        colorScheme="blue"
        variant="outline"
        size="lg"
      >
        Mulai
      </Button>
    </Container>
  );
}
