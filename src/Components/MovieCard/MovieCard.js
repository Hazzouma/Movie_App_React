import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

export default function MovieCard(props){
    return(
        <Fragment>
                <div className="card" >
                    <img src={props.imgu} alt ='gg' className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{props.tit}</h5>
                            <p className="card-text">{props.desc}</p>
                            <h2 className="card-text">  {'☆'.repeat(props.rt)} </h2>
                            <Link className="btn btn-primary" to={`/Nav/${props.tit}`}>Visit {props.tit}</Link>
                        </div>
                </div>
        </Fragment>
    );
}