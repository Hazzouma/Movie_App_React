import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingStars from '../RatingStars/RatingStars';

export default function Navbar({rateStars, getSearch}) {
    return(
        <Fragment>
            <div className="containerr">
                <Link className="btn" to='/'><h3>Welcome to my movie App</h3></Link>
                <RatingStars rateStars={rateStars}/>
                <input className="inpt" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>getSearch(e.target.value)}/>
            </div>
        </Fragment>
    );
}