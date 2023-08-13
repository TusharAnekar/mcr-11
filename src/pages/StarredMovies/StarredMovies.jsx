import { useContext } from "react"
import "./starredMovies.css"
import { MoviesContext } from "../../contexts/movies-context"
import { MovieCard } from "../../components/MovieCard/MovieCard"

export function StarredMovies () {
    const {moviesState: {starredMovies}} = useContext(MoviesContext)
    return(
        <div className="starred-movies-container">
            <h2>Starred Movies</h2>
            <div className="starred-movies-card-container">
                {
                    starredMovies?.map((movie) => <MovieCard movie={movie}/>)
                }
            </div>
        </div>
    )
}