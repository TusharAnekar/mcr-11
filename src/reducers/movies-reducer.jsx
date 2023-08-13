export const initialMovies = {
    movies: [],
    inputSearch: "",
    genreFilter: "All",
    yearFilter: 0,
    ratingFilter: 0,
    watchList: [],
    starredMovies: []
}

export const moviesReducer = (state, {type, payload}) => {
    switch(type) {
        case "SET_MOVIES": return {...state, movies: payload}
        case "SET_INPUT_SEARCH": return {...state, inputSearch: payload}
        case "SET_GENRE_FILTER": return {...state, genreFilter: payload}
        case "SET_YEAR_FILTER": return {...state, yearFilter: payload}
        case "SET_RATING_FILTER": return {...state, ratingFilter: payload}
        case "ADD_MOVIE": return {...state, movies: [...state.movies, payload]}
        case "ADD_TO_WISHLIST": return {...state, watchList: [...state.watchList, payload]}
        case "REMOVE_FROM_WATCHLIST": return {...state, watchList: payload}
        case "ADD_TO_STARRED_MOVIES": return {...state, starredMovies: [...state.starredMovies, payload]}
        case "REMOVE_FROM_STARRED_MOVIES": return {...state, starredMovies: payload}
        default: return state
    }
}