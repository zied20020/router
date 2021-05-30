import './App.css';
import React ,{ useState } from 'react'
import MovieData from "./components/MovieData"
import Nav from "./components/Nav"
import MovieList from "./components/MovieList"
import SearchMovie from "./components/SearchMovie";
import AddMovie from './components/AddMovie';
import MovieDes from './components/MovieDes';
import { BrowserRouter, Route } from "react-router-dom";




function App() {
    const [moviesList, setMoviesList] = useState(MovieData);
    const [nameSearch, setNameSearch] = useState("");
    const [ratingSearch, setRatingSearch] = useState(1);
    
  
    const addNewMovie = (e, newMovie) => {
      e.preventDefault();
      setMoviesList([...moviesList, newMovie]);
    };
  return (
          <BrowserRouter>
    <div className="App">

          <Nav/>
          
        <Route
          path="/movie/:Tiltle"
          render={(props) => <MovieDes {...props} moviesList={moviesList} />}
        />
        <Route
          path="/"
          render={() => (
            <>
          <SearchMovie
                setNameSearch={setNameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}
              />
          <MovieList  moviesList={moviesList}
                nameSearch={nameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}/>
                 <AddMovie
                addNewMovie={addNewMovie}
                setRatingSearch={setRatingSearch}
              />
                 </>
          )}
          target="_blank"
        />
      
    </div>
    </BrowserRouter>

  );
}

export default App;
