import { Container, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import useGlobalState from "../../../../globalstate";

export default function Hasil() {
  const { dataKuis, jawaban } = useGlobalState();

  function getSoalDijawab() {
    let soalDijawab = 0;
    for (let i = 0; i < jawaban.length; i++) {
      if (jawaban[i] !== "") {
        soalDijawab++;
      }
    }
    return soalDijawab;
  }

  function getTotalScore() {
    let score = 0;
    dataKuis.forEach((soal, index) => {
      if (soal.correct_answer === jawaban[index]) score++;
    });
    return score;
  }

  function getSalah() {
    let salah = 0;
    dataKuis.forEach((soal, index) => {
      if (soal.correct_answer !== jawaban[index]) salah++;
    });
    return salah;
  }

  function getNilai() {
    const totalScore = getTotalScore();
    const nilai = totalScore / dataKuis.length;
    return nilai * 100;
  }

  function getStatus() {
    const nilai = getNilai();
    if (nilai >= 80) return "Sangat Baik";
    if (nilai >= 60) return "Baik";
    if (nilai >= 40) return "Buruk";
    return "Sangat Buruk";
  }

  function getHasil() {
    const nilai = getNilai();
    if (nilai >= 80) return "Selamat, Anda lulus!";
    return "Maaf, Anda tidak lulus!";
  }

  return (
    <Container maxW="full">
      <Helmet>
        <title>QWT - Hasil</title>
      </Helmet>
      <Heading fontSize="3xl" fontWeight="bold">
        Hasil
      </Heading>
      <Text fontSize="xl" fontWeight="bold">
        {getHasil()}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        Nilai: {getNilai()}%
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        Status: {getStatus()}
      </Text>
      <Text>
        Soal Terjawab: {getSoalDijawab()}
      </Text>
      <Text>Total Benar: {getTotalScore()}</Text>
      <Text>Total Salah: {getSalah()}</Text>
    </Container>
  );
}
