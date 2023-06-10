import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import Socials from "./Socials";
import { FaEnvelopeOpen, FaLocationArrow, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="#2B6CB0" color="white" maxW="1440px" m="auto" py="10" px={{base: "4", md: "10"}}>
      <Grid maxW="1040px" m="auto" gap={10} templateColumns={{md: 'repeat(2, 1fr)'}}>
        <GridItem colSpan={{base: null, md: 2}}>
          <Heading as="h2" size="2xl" justifySelf={{base: "center", md: "start"}}>
            Contact me
          </Heading>
        </GridItem>
        <GridItem rowStart={{base: null, md: 2}} colStart={{base: null, md: 2}}>
          <Text alignSelf="center" textAlign={{md: "right"}}>
            Please get in touch if you think our work could be mutually
            beneficial!
          </Text>
        </GridItem>
        <GridItem>
          <Flex direction="column" gap="5">
            <Flex gap={2} align="center">
              <Icon as={FaLocationArrow} boxSize={4} />
              <Box as="span">Nilufer, Bursa</Box>
            </Flex>
            <Link href="tel:+905052382655" display="flex" gap={2} align="center">
              <Icon as={FaPhone} boxSize={4} />
              <Box as="span">+90 505 238 26 55</Box>
            </Link>
            <Link
              href="mailto:rafetbasturk@yahoo.com"
              display="flex"
              gap={2}
              align="center"
            >
              <Icon as={FaEnvelopeOpen} boxSize={4} />
              <Box as="span">rafetbasturk@yahoo.com</Box>
            </Link>
          </Flex>
        </GridItem>
        <GridItem rowStart={{base: null, md: 3}} colStart={{base: null, md: 2}}>
          <Socials footer={true} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Footer;
