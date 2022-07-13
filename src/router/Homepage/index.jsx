import {
  Flex,
  Box,
  Stack,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import background from "../../assets/image/background.jpg";

export default function Homepage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Button
            colorScheme="blue"
            textTransform="uppercase"
            w="fit-content"
            onClick={onOpen}
          >
            Masuk
          </Button>
        </Stack>
      </Flex>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent m={10} borderRadius={10}>
          <ModalHeader>MASUK</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              incidunt est doloremque minus sapiente maxime odio, quisquam
              doloremque veritatis quam tempore quisquam, quidem quisquam!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
