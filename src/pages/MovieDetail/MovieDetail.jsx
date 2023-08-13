import { useParams } from "react-router-dom";
import "./movieDetail.css";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/movies-context";

export function MovieDetail() {
  const { movieId } = useParams();
  const {
    moviesState: { movies },
  } = useContext(MoviesContext);
  const movie = movies.find(({ id }) => id === Number(movieId));
  const {
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

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-card-container">
        <img src={imageURL} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
          <p>Year: {year}</p>
          <div className="genre-content"> Genre: 
            {genre.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <p>Rating: {rating}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <div className="cast-content"> Cast:
            {cast.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="buttons-container">
            <button>Star</button>
            <button>Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
