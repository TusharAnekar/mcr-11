import { createContext, useEffect, useReducer } from "react";
import { movies } from "../db/moviesData";
import { initialMovies, moviesReducer } from "../reducers/movies-reducer";

export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [moviesState, moviesDisptach] = useReducer(
    moviesReducer,
    initialMovies
  );

  useEffect(() => {
    const data = localStorage.getItem("moviesLocalStorage");
    if (data) {
      moviesDisptach({ type: "SET_MOVIES", payload: JSON.parse(data) });
    } else {
      localStorage.setItem("moviesLocalStorage", JSON.stringify(movies));
      moviesDisptach({ type: "SET_MOVIES", payload: movies });
    }
  }, []);

  const allMoviesGenres = moviesState?.movies?.map(({ genre }) =>
    genre?.map((oneGenre) => oneGenre)
  );

  const mergedAllGenres = allMoviesGenres?.reduce(
    (acc, gen) => [...acc, ...gen],
    []
  );

  const allGenres = [...new Set(mergedAllGenres)];

  const allMoviesReleasedYears = [
    ...new Set(moviesState?.movies?.map(({ year }) => year)),
  ];

  const sortedAllMoviesReleasedYears = [...allMoviesReleasedYears]?.sort(
    (a, b) => a - b
  );

  const searchedFilteredMovies = moviesState?.inputSearch.length
    ? moviesState?.movies?.filter(({ title }) =>
        title.toLowerCase().includes(moviesState?.inputSearch.toLowerCase())
      )
    : moviesState?.movies;

  const genreFilteredMovies =
    moviesState?.genreFilter === "All"
      ? searchedFilteredMovies
      : searchedFilteredMovies?.filter(({ genre }) =>
          genre.includes(moviesState?.genreFilter)
        );

  const yearFilteredMovies = Number(moviesState?.yearFilter)
    ? genreFilteredMovies?.filter(
        ({ year }) => year === Number(moviesState?.yearFilter)
      )
    : genreFilteredMovies;

  const ratingFilteredMovies = Number(moviesState?.ratingFilter)
    ? yearFilteredMovies?.filter(
        ({ rating }) => rating === Number(moviesState?.ratingFilter)
      )
    : yearFilteredMovies;

  const getIsMovieInWatchlist = (movieId) =>
    moviesState?.watchList?.some(({ id }) => id === movieId);

  const getIsMovieInStarredMovies = (movieId) =>
    moviesState?.starredMovies?.some(({ id }) => id === movieId);

  return (
    <MoviesContext.Provider
      value={{
        moviesState,
        moviesDisptach,
        allGenres,
        sortedAllMoviesReleasedYears,
        ratingFilteredMovies,
        getIsMovieInWatchlist,
        getIsMovieInStarredMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
