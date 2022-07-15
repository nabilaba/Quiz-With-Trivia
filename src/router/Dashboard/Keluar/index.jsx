import useGlobalState from "../../../globalstate";
import keluarimg from "../../../assets/image/keluar.svg";
import { useNavigate } from "react-router-dom";
import { Stack, Text, Image, Button } from "@chakra-ui/react";

export default function Keluar() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setNama, setJawaban } = useGlobalState();

  return (
    <Stack
      borderRadius="md"
      py={5}
      borderColor="accent.50"
      align="center"
      justify="center"
    >
      <Image src={keluarimg} alt="keluar" h="400px" />
      <Text fontSize="xl" fontWeight="bold">
        Selamat tinggal {useGlobalState().nama}
      </Text>
      <Button
        bg="accent.50"
        color="white"
        _hover={{ bg: "accent.100" }}
        _active={{ bg: "accent.100" }}
        onClick={() => {
          setIsLoggedIn(false);
          setNama("");
          useGlobalState.persist.clearStorage();
          navigate("/");
        }}
        textTransform="uppercase"
      >
        Keluar dengan sekali ketuk
      </Button>
    </Stack>
  );
}
