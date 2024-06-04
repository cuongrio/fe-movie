import { SimpleGrid } from "@chakra-ui/react";
import { shortTitle } from "@/utils/shortTitle";
import { MOVIE_DATA } from "./data";
import MovieItem from "./movie-item";

const MovieList = () => {
    return (
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          gap={6}
        >
        {MOVIE_DATA.results.map(movie => (
            <MovieItem
              href={`/movie/${movie.id}`}
              id={movie.id}
              key={movie.id}
              title={shortTitle(movie.title)}
              rating={movie.vote_average}
              source={movie.poster_path}
            />
          ))}
        </SimpleGrid>
      )
}

export default MovieList;