import { Flex, Icon, Link } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = ({ footer }) => {
  return (
    <Flex
      display={{ base: "flex", md: footer ? "flex" : "none", lg: "flex" }}
      alignItems={footer ? "end" : "center"}
      justify={{ base: "center", md: footer ? "end" : null, lg: "flex-end" }}
      gap={3}
      p={!footer ? "5" : null}
      color={footer ? "black" : null}
    >
      <Link href="https://github.com/rafetbasturk" isExternal>
        <Icon as={FaGithubSquare} boxSize={10} />
      </Link>
      <Link href="https://github.com/rafetbasturk" isExternal>
        <Icon as={FaTwitter} boxSize={10} />
      </Link>
      <Link href="https://github.com/rafetbasturk" isExternal>
        <Icon as={FaLinkedin} boxSize={10} />
      </Link>
    </Flex>
  );
};
export default Socials;
