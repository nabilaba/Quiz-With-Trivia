import { Container, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import useGlobalState from "../../../../globalstate";

export default function Hasil() {
  const { dataKuis, jawaban } = useGlobalState();

  function getTotalScore() {
    let score = 0;
    dataKuis.forEach((soal, index) => {
      if (soal.correct_answer === jawaban[index]) score++;
    });
    return score;
  }

  function getNilai() {
    const totalScore = getTotalScore();
    const nilai = totalScore / dataKuis.length;
    return nilai * 100;
  }

  return (
    <Container maxW="full" p={4}>
      <Helmet>
        <title>QWT - Hasil</title>
      </Helmet>
      <Heading fontSize="3xl" fontWeight="bold">
        Hasil
      </Heading>

      <Text>Total benar anda adalah: {getTotalScore()}</Text>
      <Text>Nilai anda adalah: {getNilai()}</Text>
    </Container>
  );
}
