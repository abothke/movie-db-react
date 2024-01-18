import './App.css'
import Header from './assets/components/header/Header'
import MovieList from './assets/components/movieList/MovieList'
import movies from './assets/data/data'

function App() {

  return (
    <>
    <Header />
    <MovieList movies={movies}/>
    </>
  )
}

export default App
