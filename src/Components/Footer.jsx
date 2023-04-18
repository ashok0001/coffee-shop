import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="">
        <Box as="footer" bg="gray.800" color="white" py="6" px="10">
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <GridItem>
          <Text fontWeight="bold" mb="2">
            Links
          </Text>
          <Box>
            <Text mb="1">
              <a href="/about">About</a>
            </Text>
            <Text mb="1">
              <a href="/contact">Contact</a>
            </Text>
            <Text mb="1">
              <a href="/career">career</a>
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" mb="2">
            &copy; {currentYear} Coffee Shop
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
    </div>
  )
};

export default Footer;
