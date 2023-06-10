import { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Socials from "./Socials";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      as="header"
      direction={{ base: "column", md: "row" }}
      pos="relative"
      justify={{ base: "flex-start", lg: "center" }}
    >
      <Box
        pos="absolute"
        style={{
          width: "100%",
          height: isMobile ? "400px" : "620px",
          clipPath: isMobile
            ? "polygon(0 0, 100% 0, 100% 50%, 0% 95%)"
            : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
          background: "#2B6CB0",
        }}
      ></Box>

      <Box mx={{ base: "auto", sm: "10" }} my={5} maxW="1040px">
        <Box>
          <Box
            pos="relative"
            zIndex="5"
            float={{ base: "none", md: "left" }}
            maxW="400px"
            h="350px"
            m={{ base: "auto", md: "0", lg: "8" }}
            pr={{ base: "0", md: "10", lg: "0" }}
          >
            <Image
              boxShadow={{ base: "xl", md: "dark-lg", lg: "2xl" }}
              src="./rafet.jpg"
              w={{ base: "280px", md: "400px" }}
              h={{ base: "350px", md: "430px", lg: "500px" }}
              pos={{ base: "relative" }}
              top={{ base: "0", md: "30px", lg: "0" }}
              left={{ base: "50%", md: "0" }}
              transform={{ base: "translate(-50%, 0)", md: "translate(0, 0)" }}
            />
            <Heading
              as="h2"
              wordBreak="break-word"
              width={{ base: "100%", md: "max-content" }}
              maxW={{ base: "280px", md: "100%" }}
              fontSize={{ base: "54px" }}
              lineHeight="105%"
              color="white"
              pl={4}
              pos="absolute"
              top={{ base: "230px", sm: "230px", md: "30px", lg: "440px" }}
              left={{ base: "50%", md: "310px", lg: "0" }}
              transform={{ base: "translate(-50%, 0)", md: "translate(0, 0)" }}
              noOfLines={{ base: "2", sm: "2", md: "1" }}
            >
              Rafet Basturk
            </Heading>
          </Box>

          <Box
            bg="white"
            boxShadow={{ base: "none", md: "base" }}
            ml={{ base: "0", md: "10" }}
            pt={{ base: "0", md: "50px", lg: "10" }}
            pos="relative"
            top={{ base: "40px", md: "120px", lg: "80px" }}
          >
            <Heading
              as="h1"
              size="2xl"
              textAlign={{ base: "center", lg: "left" }}
              mb={{base: "0", lg: "4"}}
            >
              About me
            </Heading>

            <Text
              p={4}
              lineHeight={{ base: "1.8", md: "2.2", lg: "1.6" }}
              letterSpacing={{ base: "normal", md: "1.3px", lg: "0.8px" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              dicta dolore corporis at suscipit rerum. Harum voluptates
              doloremque excepturi consequatur quisquam, sunt non est rem nulla
              saepe! Possimus veniam enim ut placeat adipisci temporibus
              aspernatur, explicabo odit ex sequi tenetur, praesentium eaque
              tempora amet? Esse ullam cumque rerum laboriosam consectetur
              tempore neque quaerat, magnam blanditiis explicabo accusantium
              magni id corrupti.
            </Text>

            <Socials />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default Header;
