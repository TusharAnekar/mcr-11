import { useParams } from "react-router-dom";
import "./movieDetail.css";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/movies-context";

export function MovieDetail() {
  const { movieId } = useParams();
  const {
    moviesState: { movies, watchList, starredMovies },
    moviesDisptach,
    getIsMovieInWatchlist,
    getIsMovieInStarredMovies,
  } = useContext(MoviesContext);
  const movie = movies.find(({ id }) => id === Number(movieId));
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = movie;

  const isMovieInWatchlist = getIsMovieInWatchlist(id);
  const isMovieInStarredMovies = getIsMovieInStarredMovies(id);

  function handleAddToWishlist() {
    if (isMovieInWatchlist) {
      moviesDisptach({
        type: "REMOVE_FROM_WATCHLIST",
        payload: watchList.filter((movie) => movie.id !== id),
      });
    } else {
      moviesDisptach({ type: "ADD_TO_WISHLIST", payload: movie });
    }
  }

  function handleAddToStarredMovies() {
    if (isMovieInStarredMovies) {
      moviesDisptach({
        type: "REMOVE_FROM_STARRED_MOVIES",
        payload: starredMovies.filter((movie) => movie.id !== id),
      });
    } else {
      moviesDisptach({ type: "ADD_TO_STARRED_MOVIES", payload: movie });
    }
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-card-container">
        <img src={imageURL} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
          <p>Year: {year}</p>
          <div className="genre-content">
            {" "}
            Genre:
            {genre.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <p>Rating: {rating}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <div className="cast-content">
            {" "}
            Cast:
            {cast.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="buttons-container">
            <button onClick={handleAddToStarredMovies}>
              {isMovieInStarredMovies ? "UnStar" : "Star"}
            </button>
            <button onClick={handleAddToWishlist}>
              {isMovieInWatchlist ? "Remove From Watchlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
