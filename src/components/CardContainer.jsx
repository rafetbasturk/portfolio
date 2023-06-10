import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const CardContainer = ({title, img, url, repo}) => {
  return (
    <Card as="article" >
      <CardBody>
        <Image
          src={img}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="5">
          <Flex align="center">
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Spacer />
            <Flex alignItems="center" gap={2}>
              <Link href={repo} isExternal>
                <FaGithubSquare style={{ width: "32px", height: "32px" }} />
              </Link>
              <Link href={url} isExternal>
                <FaExternalLinkAlt mx="2px" size="24px" />
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default CardContainer;
