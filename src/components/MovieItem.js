import React from 'react';
import {
  SimpleGrid,
  Box,
  Avatar,
  Flex,
  Stack,
  Heading,
  Badge,
} from '@chakra-ui/react';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export default function MovieItem({ item }) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box p={12} shadow="md" borderWidth="1px" rounded="md" width="2xs">
        <Flex justifyContent="center" paddingY="2">
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src={`${baseUrl}${item.poster_path}`}
          />
        </Flex>
        <Stack>
          <Heading size="md" fontWeight="semibold">
            {item.name}
          </Heading>
        </Stack>
      </Box>
    </SimpleGrid>
  );
}
