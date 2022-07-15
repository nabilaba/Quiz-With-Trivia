import {
  Box,
  Button,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Link as LinkTo } from "react-router-dom";
import useGlobalState from "../../../../globalstate";
import formatter from "../../../../formatter";

export default function No() {
  const { idSoal, setIdSoal, dataKuis, setJawaban, jawaban, removeAllJawaban } =
    useGlobalState();
  const noKuis = parseInt(idSoal) + 1;
  const incorrect_answers = dataKuis[idSoal].incorrect_answers;
  const correct_answer = dataKuis[idSoal].correct_answer;
  const pilihan = [...incorrect_answers, correct_answer];
  return (
    <Stack borderRadius="md" py={5} borderColor="accent.50">
      <Helmet>
        <title>{`QWT - Kuis ${noKuis}`}</title>
      </Helmet>
      <Heading as="h1" size="md" color="accent.50">
        Kuis {noKuis}
      </Heading>
      <Stack spacing={2}>
        <Heading as="h2" size="md">
          {formatter(dataKuis[idSoal].question)}
        </Heading>
        <RadioGroup value={jawaban[idSoal]}>
          <Stack>
            {pilihan.map((item, index) => (
              <Radio
                key={index}
                value={item}
                onChange={() => {
                  setJawaban(idSoal, item);
                }}
              >
                {formatter(item)}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Stack>
      <Box w="full" pos="fixed" bottom={0} left={0} pl={{ base: 0, md: 60 }}>
        <HStack spacing={2} m={5}>
          {idSoal !== 0 && (
            <Button
              colorScheme="black"
              variant="outline"
              size="lg"
              w="full"
              onClick={() => setIdSoal(idSoal - 1)}
            >
              Sebelumnya
            </Button>
          )}
          {noKuis < dataKuis.length ? (
            <Button
              color="white"
              bg="accent.50"
              _hover={{ bg: "accent.100" }}
              _active={{ bg: "accent.100" }}
              size="lg"
              w="full"
              onClick={() => {
                setIdSoal(noKuis);
              }}
            >
              Selanjutnya
            </Button>
          ) : (
            <Button
              as={LinkTo}
              to="/dashboard/kuis/hasil"
              colorScheme="blue"
              size="lg"
              w="full"
            >
              Selesai
            </Button>
          )}
        </HStack>
      </Box>
    </Stack>
  );
}
