import React from 'react';

import { Text, Flex, Grid, Image, Heading } from '@chakra-ui/react';

export const CharacterCard = ({ character }) => {
  return (
    <Grid templateColumns="200px 1fr" bg="#3c3e44" borderRadius="10px" gap={6}>
      <Image
        borderTopLeftRadius="10px"
        borderBottomLeftRadius="10px "
        src={character.image}
        alt={character.name}
      />
      <Flex direction="column">
        <Heading as="h1" color="#ff9800">
          {character.name}
        </Heading>
        <Heading as="h2" color="white">
          {character.status}
        </Heading>
        <Text color="white">{character.species} </Text>
        <Text color="white">{character.gender} </Text>
        <Text color="white">{character.origin.name} </Text>
        <Text color="white">{character.location.name} </Text>
      </Flex>
    </Grid>
  );
};
