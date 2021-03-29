import React, { Fragment, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import MovieList from './Components/MovieList/MovieList';
import AddModal from './Components/AddModal/AddModal';
import FilmDetails from './Components/FilmDetails/FilmDetails';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies]=useState([
    {
      title: "The Revenant",
      description:
        "The Revenant ou Le Revenant au Québec est un film d'aventures américain réalisé, coécrit et coproduit par Alejandro González Iñárritu, sorti en 2015.",
      posterUrl:
        "https://i1.wp.com/diacritik.com/wp-content/uploads/2016/02/the-revenant-2015-poster1.jpg?ssl=1",
      rate: 5,
      id: 1,
      },
      {
      title: "The Dead of Night",
      description:
        "Alone and isolated at the family ranch, Tommy and his sister June suddenly find themselves being terrorized and hunted by a pair of nomadic killers.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOGJmMTlmMTktYjg0Yy00MWIyLWJkN2YtODRlMjI1YzNkNTcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
      rate: 5,
      id: 2,
      },
      {
      title: "Inception",
      description:
        "Inception ou Origine au Canada, est un thriller de science-fiction américano-britannique écrit, réalisé et produit par Christopher Nolan, sorti en 2010.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rate: 4,
      id: 3,
      },
    {
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 3,
      id: 4,
      },
    {
      title: "Zombieland: Double Tap",
      description:
        "Zombieland: Double Tap is a 2019 American post-apocalyptic zombie comedy film directed by Ruben Fleischer and written by Rhett Reese, Paul Wernick, and David Callaham.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Zombieland_Double_Tap_teaser_poster.jpg",
      rate: 5,
      id:5,
      },
  ])
  const [search, setSearch]=useState('');
  const [rating, setRating]=useState(1);

  const rateStars = rating=> setRating(rating);
  const getSearch = search => setSearch(search);
  
  const getFilm = (film) =>  setMovies([...movies, film]);

  console.log(movies)

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar rateStars={rateStars} getSearch={getSearch} />
            <MovieList movies={movies} rating={rating} search={search} />
            <AddModal getFilm={getFilm}/>
          </Route>
          <Route path='/Nav/:id' children={<><Navbar /> <FilmDetails films={movies}/></>}>
          </Route>
          <Route path='/*'>
            <h1 style={{display:'flex',justifyContent:'center', margin:'15% '}}>Something went wrong, go back to <Link to='/'> home!</Link></h1>
          </Route>
        </Switch>
      </Router>

    </Fragment>
  );
}
export default App;
