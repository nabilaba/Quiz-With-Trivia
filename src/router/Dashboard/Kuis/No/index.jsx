import { Button, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useParams, Link as LinkTo } from "react-router-dom";
import useGlobalState from "../../../../globalstate";

export default function No() {
  const { id } = useParams();
  const { dataKuis } = useGlobalState();
  const noKuis = parseInt(id) + 1;
  const incorrect_answers = dataKuis[id].incorrect_answers;
  const correct_answer = dataKuis[id].correct_answer;
  const pilihan = [...incorrect_answers, correct_answer];
  return (
    <Stack borderRadius="md" py={5} borderColor="accent.50">
      <Helmet>
        <title>{`QWT - Kuis ${noKuis}`}</title>
      </Helmet>
      <Heading as="h1" size="md" color="accent.50">
        Soal {noKuis}
      </Heading>
      <Stack spacing={2}>
        <Heading as="h2" size="md">
          {dataKuis[id].question.replace(/&quot;/g, '"')}
        </Heading>
        <RadioGroup>
          <Stack>
            {pilihan.map((item, index) => (
              <Radio
                key={index}
                value={item}
                onChange={() => {
                  console.log(item);
                }}
              >
                {item}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Stack>
      {noKuis < dataKuis.length ? (
        <Button
          as={LinkTo}
          to={`/dashboard/kuis/no=${noKuis}`}
          colorScheme="blue"
          variant="outline"
          size="lg"
        >
          Selanjutnya
        </Button>
      ) : (
        <Button
          as={LinkTo}
          to="/dashboard/kuis"
          colorScheme="blue"
          variant="outline"
          size="lg"
        >
          Selesai
        </Button>
      )}
    </Stack>
  );
}
