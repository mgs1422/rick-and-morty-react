import { Box, Image } from '@chakra-ui/react';
import logo from '../images/randm.jpg';

export const Header = () => {
  return (
    <Box boxsize="sm">
      <Image src={logo} alt="Logo Rick and Morty" w="100vw" h="200px" />
    </Box>
  );
};
