import React from 'react';
import { getCharacters } from '../api/characters';
import { Flex, Button, Text, Spinner, Grid, Box } from '@chakra-ui/react';

import { CharacterCard } from './';

export const Home = () => {
  const [page, setPage] = React.useState(1);
  const [characters, setCharacter] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const doFetchCharacters = async () => {
      setLoading(true);
      setError(null);
      setCharacter([]);
      try {
        const { results } = await getCharacters(page);
        setLoading(false);
        setCharacter(results);
        setError(null);
      } catch (e) {
        setLoading(false);
        setCharacter([]);
        setError(e.message);
      }
    };
    doFetchCharacters();
  }, [page]);

  if (loading) {
    return (
      <Flex align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  } else if (error) {
    return <Text>{error}</Text>;
  }

  const ChangeNextPage = () => {
    setPage(page + 1);
  };

  const ChangePreviusPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <Box bg="#24282f">
      <Grid
        pt="6rem"
        pb="6rem"
        pl="3rem"
        pr="3rem"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </Grid>
      <Flex align="center" justify="center">
        <Button
          onClick={() => ChangePreviusPage()}
          w="200px"
          mr="1rem"
          colorScheme="blue"
        >
          Previous
        </Button>
        <Button onClick={() => ChangeNextPage()} w="200px" colorScheme="blue">
          Next
        </Button>
      </Flex>
    </Box>
  );
};
