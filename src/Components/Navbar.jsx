import { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Contact', 'Login'];

const NavLink = ({ children, ...props }) => (
  <Text
    fontWeight={500}
    display="block"
    {...props}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.600', 'gray.200'),
    }}
  >
    {children}
  </Text>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
    onClose();
  };

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={4}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        boxShadow="md"
      >
        <Flex align="center">
          <Box>
            <Text fontSize="lg" fontWeight="bold" className='pr-10'>
              Coffee Shop
            </Text>
          </Box>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={isOpen ? onClose : onOpen}>
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          flexBasis={{ base: '100%', md: 'auto' }}
          flexGrow={1}
        >
          <Stack
            spacing={8}
            align="center"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          >
            {Links.map((link) => (
              <NavLink
                key={link}
                href="#"
                onClick={() => handleClick(link)}
                color={link === activeLink ? 'teal.500' : 'gray.600'}
                className="cursor-pointer"
              >
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
