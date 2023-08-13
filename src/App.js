import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import { AddNewMovie } from './pages/AddNewMovie/AddNewMovie';
import { Watchlist } from './pages/Watchlist/Watchlist';
import { StarredMovies } from './pages/StarredMovies/StarredMovies';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:movieId' element={<MovieDetail/>}></Route>
        <Route path='/add-new-movie' element={<AddNewMovie/>}></Route>
        <Route path='/watch-list' element={<Watchlist/>}></Route>
        <Route path='/starred-movies' element={<StarredMovies/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
