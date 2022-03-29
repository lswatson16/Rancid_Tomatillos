import React, { Component } from 'react';
import './MovieDetail.css';
import apiCalls from '../../ApiCalls';

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: null
    }
  }


  componentDidMount() {
    console.log("calling single movie api", this.props)
    const { movieId } = this.props
    console.log('movieId', movieId)
    apiCalls
      .fetchOneMovie(movieId)
      .then(data =>
        this.setState({ selectedMovie: data.movie })
      )
      .catch(error => {
        console.log('caught err for single movie')
        this.setState({ error: 'Sorry our team is working on resolving this issue' })
      })
  }

  render() {
    console.log('rendering movie')
    const { returnToMain } = this.props
    const { selectedMovie: movie } = this.state
    if (!movie) {
      return <p>None found</p>
    } else {
      return (
        <div
          className='movieDetail'
          style={{
            backgroundImage: `url(${movie.backdrop_path})`
          }}
        >
          <div className='gradient'>
            <button
              className='view-all-movies-button'
              onClick={() => returnToMain()}
            >
              View All Movies
            </button>
            {/* <img className='back-drop' src={movie.backdrop_path} /> */}
            <section className='title-poster'>
              <img className='poster' src={movie.poster_path} />
              <div className='text-wrapper'>
                <h1>{movie.title}</h1>
                <h2 className='release-date'>Released: {movie.release_date}</h2>
                <h2 className='rating'>Average rating: {movie.average_rating}</h2>
                <h2 className='overview'> {movie.overview}</h2>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }
}


export default MovieDetail;
