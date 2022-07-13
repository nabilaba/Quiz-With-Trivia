import { useState } from "react";
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
  Image,
  Input,
} from "@chakra-ui/react";
import background from "../../assets/image/background.jpg";
import loginImg from "../../assets/image/login.svg";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const hoveractive = {
    _hover: {
      bg: "accent.100",
      boxShadow: "xl",
    },
    _active: {
      bg: "accent.100",
      boxShadow: "xl",
    },
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (username !== "demo") alert("Username tidak ditemukan");
    else if (password.length < 8) alert("Password minimal 8 karakter");
    else if (password !== "12345678") alert("Password salah");
    else {
      onClose();
      navigate("/dashboard");
    }
  };

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
            textTransform="uppercase"
            w="fit-content"
            onClick={onOpen}
            bg="accent.50"
            color={"white"}
            {...hoveractive}
          >
            Masuk
          </Button>
        </Stack>
      </Flex>
      <Modal
        onClose={onClose}
        size={"full"}
        isOpen={isOpen}
        scrollBehavior={"inside"}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent m={10} borderRadius={10}>
          <ModalHeader>MASUK</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack
              spacing={6}
              direction={{ base: "column", md: "row" }}
              align={"center"}
              justify={"center"}
            >
              <Box flex={1}>
                <Image src={loginImg} alt="login" />
              </Box>
              <Box flex={1}>
                <Stack
                  bg={"gray.50"}
                  rounded={"xl"}
                  p={{ base: 4, sm: 6, md: 8 }}
                  spacing={{ base: 8 }}
                  maxW={{ lg: "lg" }}
                  mx="auto"
                >
                  <Stack spacing={4}>
                    <Heading
                      color={"gray.800"}
                      lineHeight={1.1}
                      fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                    >
                      Perlu Identitas
                      <Text as={"span"} color="accent.50">
                        !
                      </Text>
                    </Heading>
                    <Text
                      color={"gray.500"}
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Sebelum melanjutkan, anda diharuskan mengisi identitas
                      diri untuk menggunakan website yang saya buat!
                    </Text>
                  </Stack>
                  <Box as={"form"} onSubmit={HandleSubmit}>
                    <Stack spacing={4}>
                      <Input
                        type="text"
                        isRequired
                        placeholder="Nama"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                      />
                      <Input
                        type="text"
                        isRequired
                        placeholder="Username: demo"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <Input
                        type="password"
                        isRequired
                        placeholder="Password : 123"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Button
                      type="submit"
                      mt={8}
                      w={"full"}
                      bg="accent.50"
                      color={"white"}
                      {...hoveractive}
                    >
                      Masuk
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter bg="accent.50" borderBottomRadius={10}></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
