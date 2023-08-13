import { useContext } from "react";
import "./watchlist.css";
import { MoviesContext } from "../../contexts/movies-context";
import { MovieCard } from "../../components/MovieCard/MovieCard";
export function Watchlist() {
  const {
    moviesState: { watchList },
  } = useContext(MoviesContext);

  return (
    <div className="watchlist-container">
      <h2>Watchlist</h2>
      <div className="watchlist-movies-container">
      {watchList?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  );
}
