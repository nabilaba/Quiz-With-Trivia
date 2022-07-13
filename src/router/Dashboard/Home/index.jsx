import { Container, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="full">
      <Stack spacing={3}>
        <Text fontSize="3xl" fontWeight="bold">
          Hi, Nabil 👋
        </Text>
        <Stack borderRadius="md" pr={2} borderColor="accent.50">
          <Text fontSize="xl" fontWeight="bold">
            • 😁 Versi Mudah
          </Text>
        </Stack>

        <Stack borderRadius="md" pr={2} borderColor="accent.50">
          <Text fontSize="xl" fontWeight="bold">
            • 😲 Versi Sedang
          </Text>
        </Stack>

        <Stack borderRadius="md" pr={2} borderColor="accent.50">
          <Text fontSize="xl" fontWeight="bold">
            • 😍 Versi Susah
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
