import { useNavigate } from "react-router-dom"
import "./movieCard.css"
import { useContext } from "react"
import { MoviesContext } from "../../contexts/movies-context"
export function MovieCard ({movie}) {
    const navigate = useNavigate()
    const {id, title, imageURL, summary} = movie
    const {moviesState: {watchList, starredMovies}, moviesDisptach, getIsMovieInWatchlist , getIsMovieInStarredMovies} = useContext(MoviesContext)

    const isMovieInWatchlist = getIsMovieInWatchlist(id)
    const isMovieInStarredMovies = getIsMovieInStarredMovies(id)

    function handleAddToWishlist () {
        if(isMovieInWatchlist) {
            moviesDisptach({type: "REMOVE_FROM_WATCHLIST", payload: watchList.filter((movie) => movie.id !== id)})
        } else {
            moviesDisptach({type: "ADD_TO_WISHLIST", payload: movie})
        }
    }

    function handleAddToStarredMovies () {
        if(isMovieInStarredMovies) {
            moviesDisptach({type: "REMOVE_FROM_STARRED_MOVIES", payload: starredMovies.filter((movie) => movie.id !== id)})
        } else {
            moviesDisptach({type: "ADD_TO_STARRED_MOVIES", payload: movie})
        }
    }

    return(
        <div className="movie-card-container">
            <img src={imageURL} alt={title} onClick={() => navigate(`/movie/${id}`)}/>
            <p><strong>{title}</strong></p>
            <p>{summary}</p>
            <div className="buttons-container">
            <button onClick={handleAddToStarredMovies}>{isMovieInStarredMovies ? "UnStar": "Star"}</button>
            <button onClick={handleAddToWishlist}>{isMovieInWatchlist ? "Remove From Watchlist" : "Add to Wishlist"}</button>
            </div>
        </div>
    )
}