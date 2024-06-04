import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.75s ease-out" bgColor="#121829">
      <Container
        margin="0 auto"
        maxW="container.xl"
        minH="100vh"
      >
        <Header />
        <Box as="main">{children}</Box>
    
      </Container>
    </Box>
  );
};

export default Layout;
