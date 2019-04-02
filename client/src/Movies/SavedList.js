import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = (props) => {
  
  function getUnique(arr, comp) {
    const unique = arr
         .map(e => e[comp])
       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
     return unique;
  } 

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      { getUnique(props.list, 'id')
        .map(movie => (
        <NavLink exact to={`/movies/${movie.id}`} activeClassName="saved-active" className="saved-movie" key={movie.id}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link to="/" className="home-button"><div >Home</div></Link>
    </div>
  );
}

export default SavedList;
