import HeroHome from "@/components/hero-home";
import MovieList from "@/components/movie-list";
import { Box, Button } from "@chakra-ui/react";

const Movies = () => {
  return (
    <>
      <HeroHome />
      <MovieList />
      <Box
        paddingBottom={"156px"}
        paddingTop="40px"
        w="100%"
        display="flex"
        justifyContent={"center"}
      >
        <Button
          bgColor="purple.600"
          color="gray.200"
          _hover={{
            bgColor: "purple.700",
            color: "gray.200",
          }}
        >
          Load more
        </Button>
      </Box>
    </>
  );
};

export default Movies;
