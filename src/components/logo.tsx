import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} passHref>
      <Flex gap={2} align="center">
        <Image
          h="8"
          objectFit="contain"
          src="/images/logo.svg"
          alt="logo"
          cursor="pointer"
        />
        <Text color="purple.600" textTransform="uppercase">Tivi Show</Text>
      </Flex>
    </Link>
  );
};

export default Logo;
