import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import { projects } from "../data";

const Main = () => {
  return (
    <Flex
      as="main"
      direction="column"
      gap={2}
      maxW="1040px"
      mx="auto"
      mt={{ base: "10", md: "150px" }}
      p={{ base: "4", md: "10" }}
    >
      <Heading as="h2" textAlign={{ base: "center", md: "left" }}>
        My Work
      </Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap={5}
        justifyItems="center"
      >
        {projects.map((project) => (
          <CardContainer key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
export default Main;
