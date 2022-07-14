import { Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useGlobalState from "../../../../globalstate";

export default function No() {
  const { id } = useParams();
  const { dataKuis } = useGlobalState();
  return (
    <Stack borderRadius="md" py={5} borderColor="accent.50">
      <Helmet>
        <title>QWT - Soal {id}</title>
      </Helmet>
      <Heading as="h1" size="md" color="accent.50">
        Soal {id}
      </Heading>
      <Stack spacing={2}>
        <Heading as="h2" size="md">
          {dataKuis[id].question.replace(/&quot;/g, '"')}
        </Heading>
        <RadioGroup>
          <Stack>
            <Radio value="1">Unchecked</Radio>
            <Radio value="2">Unchecked</Radio>
            <Radio value="3">Unchecked</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </Stack>
  );
}
