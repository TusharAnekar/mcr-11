import { useContext, useState } from "react";
import "./addNewMovie.css";
import { MoviesContext } from "../../contexts/movies-context";
import { useNavigate } from "react-router-dom";
export function AddNewMovie() {
  const navigate = useNavigate()
  const {
    moviesState: { movies }, moviesDisptach
  } = useContext(MoviesContext);
  const [newMovieDetails, setNewMovieDetails] = useState({
    id: movies?.length + 1,
    title: "",
    year: "",
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  function handleInput(e) {
    setNewMovieDetails({ ...newMovieDetails, [e.target.name]: e.target.value });
  }

  function handleTextarea (e) {
    setNewMovieDetails({...newMovieDetails, [e.target.name]: e.target.value.split("\n")})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setNewMovieDetails({...newMovieDetails, id: movies?.length + 1})
    localStorage.setItem("moviesLocalStorage", JSON.stringify([...movies, newMovieDetails]))
    moviesDisptach({type: "ADD_MOVIE", payload: newMovieDetails})
    navigate("/")
  }

  return (
    <div className="add-new-movie-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          required
          onChange={handleInput}
        />
        <input
          type="number"
          placeholder="Year"
          name="year"
          required
          onChange={handleInput}
        />
        <textarea
          cols="30"
          rows="3"
          placeholder="Genre"
          name="genre"
          required
          onChange={handleTextarea}
        ></textarea>
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Director"
          name="director"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Writer"
          name="writer"
          required
          onChange={handleInput}
        />
        <textarea
          cols="30"
          rows="3"
          placeholder="Cast"
          name="cast"
          required
          onChange={handleTextarea}
        ></textarea>
        <input
          type="text"
          placeholder="Summary"
          name="summary"
          required
          onChange={handleInput}
        />
        <input
          type="url"
          placeholder="Image url"
          name="imageURL"
          required
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
