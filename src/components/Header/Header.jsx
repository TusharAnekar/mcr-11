import { NavLink } from "react-router-dom";
import "./header.css"
import { useContext } from "react";
import { MoviesContext } from "../../contexts/movies-context";

export function Header () {
    const {moviesDisptach} = useContext(MoviesContext)

    function handleInput (e) {
        moviesDisptach({type: "SET_INPUT_SEARCH", payload: e.target.value})
    }

    return(
        <header className="header-container">
            <h1>IMDB</h1>
            <input type="text" placeholder="search movies" onChange={handleInput}/>
            <nav className="nav-container">
                <NavLink className={"link"} to={"/"}>Movies</NavLink>
                <NavLink className={"link"} to={"/watch-list"}>Watch List</NavLink>
                <NavLink className={"link"} to={"/starred-movies"}>Starred Movies</NavLink>
            </nav>
        </header>
    )
}