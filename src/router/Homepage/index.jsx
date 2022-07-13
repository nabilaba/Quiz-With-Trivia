import { Flex, Box, Stack, Heading, Button, chakra } from "@chakra-ui/react";
import background from "../../assets/image/background.jpg";

export default function Homepage() {
  return (
    <Box
      w="full"
      h="100vh"
      backgroundImage={background}
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.700"
      >
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Heading
            fontSize={["2xl", , "3xl"]}
            fontWeight="semibold"
            color="white"
          >
            Quiz With Trivia
          </Heading>
          <Button colorScheme="blue" textTransform="uppercase" w="fit-content">
            Masuk
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
