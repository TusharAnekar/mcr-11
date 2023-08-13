import { useContext } from "react";
import "./home.css";
import { MoviesContext } from "../../contexts/movies-context";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate()
  const {moviesDisptach, allGenres, sortedAllMoviesReleasedYears, ratingFilteredMovies } = useContext(MoviesContext);

  function handleSelect (e) {
    if(e.target.name === "genre") {
        moviesDisptach({type: "SET_GENRE_FILTER", payload: e.target.value})
    } else if(e.target.name === "year") {
        moviesDisptach({type: "SET_YEAR_FILTER", payload: e.target.value})
    } else if(e.target.name === "rating") {
        moviesDisptach({type: "SET_RATING_FILTER", payload: e.target.value})
    }
  }

  return (
    <div className="home-container">
      <div className="filters-container">
        <h3>Movies</h3>

        <select name="genre" onChange={handleSelect}>
          <option value={"All"}>All Genres</option>
          {allGenres?.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select name="year" onChange={handleSelect}>
          <option value={0}>All Years</option>
          {sortedAllMoviesReleasedYears?.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>

        <select name="rating" onChange={handleSelect}>
            <option value={0}>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>

        <button onClick={() => navigate("/add-new-movie")}>Add a Movie</button>
      </div>

      <div className="movies-container">
        {
            ratingFilteredMovies?.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
        }
      </div>
    </div>
  );
}
