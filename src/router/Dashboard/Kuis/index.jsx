import useGlobalState from "../../../globalstate";
import { useEffect } from "react";
import API from "../../../constant";
import { Link as LinkTo } from "react-router-dom";
import { Button, Container, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
export default function Kuis() {
  const { namaKuis, setDataKuis, setIdSoal, dataKuis } = useGlobalState();
  useEffect(() => {
    if (namaKuis === "Vehicles")
      setDataKuis(`${API.BASE_URL}${API.EASY}&category=28`);
    else if (namaKuis === "General Knowledge")
      setDataKuis(`${API.BASE_URL}${API.MEDIUM}&category=9`);
    else if (namaKuis === "Science: Mathematics")
      setDataKuis(`${API.BASE_URL}${API.HARD}&category=19`);
  }, []);
  return (
    <Container maxW="full" p={4}>
      <Helmet>
        <title>QWT - Kuis {namaKuis}</title>
      </Helmet>
      <Heading fontSize="3xl" fontWeight="bold">
        {namaKuis}
      </Heading>
      <Button
        as={LinkTo}
        to="mengerjakan"
        colorScheme="blue"
        variant="outline"
        size="lg"
        onClick={() => {
          setIdSoal(0);
        }}
      >
        Mulai
      </Button>
    </Container>
  );
}
