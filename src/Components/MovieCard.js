import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css'

const MovieCard = ({ title, poster, averageRating, releaseDate, id, setSelectedMovie }) => {

  return (
    <Link to={`/${id}`}>
      <article className="movieCard" onClick={() => setSelectedMovie(id)}>
        {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
        <h2>{title}</h2>
        <p>Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
        <p>Release Date: {releaseDate}</p>
      </article>
    </Link>
  )
}

export default MovieCard;
