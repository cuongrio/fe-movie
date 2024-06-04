import { Box, Image, Link, Text } from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
const IMAGE_URL = "http://image.tmdb.org/t/p/w500";

type ItemProps = {
  title?: string;
  rating?: number;
  source?: string | null;
  children?: React.ReactNode;
  id: number;
  href: string;
};

const MovieItem = (props: ItemProps) => {
  const { title, rating, source, id, href } = props;
  return (
    <Box
      as={Link}
      href={href}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"12px"}
      position="relative"
      bg={"rgba(32, 40, 62, 0.8)"}
      padding={2}
      style={{
        backdropFilter: "blur(80px)",
      }}
    >
      <Box
        position={"absolute"}
        top="18px"
        left={"16px"}
        background={"rgba(0, 0, 0, 0.65)"}
        padding={"4px 8px"}
        height="40px"
        width="60px"
        display={"flex"}
        color="#ffad49"
        borderRadius={"8px"}
        gap="4px"
        flexDirection={"row"}
        alignItems="center"
      >
        <FiStar color="#ffad49" />
        {rating}
      </Box>
      <Image
        alt="thumnail"
        objectFit={"cover"}
        borderRadius={"8px"}
        src={
          source === null || source === "null"
            ? "/images/movie-placeholder.svg"
            : IMAGE_URL + source
        }
        style={{
          aspectRatio: "2 / 3",
        }}
      />
      <Box paddingTop="8px">
        <Text as="h3" fontSize={"lg"} color={"gray.50"} padding="8px">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default MovieItem;
