import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  const Kuis = ({ judul }) => {
    return (
      <Stack borderRadius="md" pr={2} borderColor="accent.50">
        <Text fontSize="xl" fontWeight="bold">
          • {judul}
        </Text>
        <SimpleGrid columns={{base: 0, md: 2, lg: 3, xl: 4}} spacingX={2} spacingY={2}>
          <Box height="80px" borderWidth={2} borderColor="accent.50" borderRadius={"md"} p={4}>
            <Text>Jumlah 5 soal</Text>
            <Text>Durasi 5 detik</Text>
          </Box>
        </SimpleGrid>
      </Stack>
    );
  };

  return (
    <Container maxW="full">
      <Stack spacing={3}>
        <Text fontSize="3xl" fontWeight="bold">
          Hi, Nabil 👋
        </Text>

        <Kuis judul="😁 Versi Mudah" />
        <Kuis judul="😲 Versi Sedang" />
        <Kuis judul="😍 Versi Susah" />
      </Stack>
    </Container>
  );
}
