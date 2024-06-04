import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../logo";

const Header = () => {
  const mobileNav = useDisclosure();
  const colorLink = "purple.600";

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justifyContent="space-between"
      py={4}
      gap={4}
    >
      <Heading as="h1" size="md">
        <Logo />
        <VisuallyHidden>Choc</VisuallyHidden>
      </Heading>
      <HStack display="flex" alignItems="center" spacing={1}>
        <HStack
          spacing={1}
          mr={1}
          color={colorLink}
          display={{ base: "none", md: "inline-flex" }}
        >
          <NextLink href="/movies" passHref>
            <Button variant="ghost">Movies</Button>
          </NextLink>

          <NextLink href="#" passHref>
            <Button variant="ghost">TV Shows</Button>
          </NextLink>

          <NextLink href="#" passHref>
            <Button variant="ghost">Suggest me</Button>
          </NextLink>
        </HStack>

        <Box display={{ base: "inline-flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color={useColorModeValue("gray.800", "inherit")}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />

          <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={4}
            pb={6}
            spacing={3}
            rounded="sm"
            backgroundColor={"rgba(18, 24, 41, 0.8)"}
            backdropFilter={"blur(40px)"}
          >
            <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

            <NextLink href="/movies" passHref>
              <Button variant="ghost">Movies</Button>
            </NextLink>
            <NextLink href="#" passHref>
              <Button variant="ghost"> TV Shows</Button>
            </NextLink>

            <NextLink href="#" passHref>
              <Button variant="ghost">Suggest me</Button>
            </NextLink>
          </VStack>
        </Box>
      </HStack>
      {/* <Box marginLeft="auto">
      <ThemeToggle />
    </Box> */}
    </Flex>
  );
};

export default Header;
