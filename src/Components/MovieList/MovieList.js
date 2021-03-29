import React, { Fragment } from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList(props){

  return(
      <Fragment>
          <div className='disp'>
              {props.movies
              .filter(e=> (e.rate>=props.rating || e.rate ===0) && e.title.toLowerCase().includes(props.search.toLowerCase()))
              .map((e,i)=> 
                <MovieCard tit={e.title} desc={e.description} imgu={e.posterUrl} rt={e.rate} key={i} id={i} />
              )}
          </div>
      </Fragment>
  );
}