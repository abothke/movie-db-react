import MovieCard from "../movieCard/MovieCard";
import './movielist.css'

const MovieList = ({movies}) => {
    return ( 
        <>
        <div className='movieList'>
        {movies.map((movie, index) =>
        <div className ='movieCard' key={index}>
        <MovieCard
        title={movie.title}
        year={movie.year}
        director={movie.director}
        duration={movie.duration}
        genre={movie.genre}
        rating={movie.rate}
        />
        </div>
        )}
        </div>
        </>
     );
}
 
export default MovieList;