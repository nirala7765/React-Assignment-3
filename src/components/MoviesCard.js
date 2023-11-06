import React from "react";
import '../styles/MovieCard.css';

function MoviesCard(props) {
  
  
  return (
    <>
      <div className="card-container">
        <div className="card-content">

          <div className="img-container">
            <img className="movie-poster" src={props.data.Poster} alt="Not Found"/>
          </div>

          <div className="text-container">
            <h1 className="title">{props.data.Title}</h1>
            <h3 className="Year">{props.data.Year}</h3>
          </div>
          
          
        </div>

       

        


      </div>
    </>
  );
}

export default MoviesCard;
