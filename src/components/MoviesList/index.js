import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardMovie } from '../CardMovie';
import styles from "./moviesList.module.css";

export class MoviesList extends Component {

    static propTypes = {
        movies: PropTypes.array.isRequired,
    }

    render() {
        const { movies } = this.props;
        return (
            <div className={styles.moviesListContainer}>
                {
                    movies.map(movie => (
                        <CardMovie 
                            key={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                        />
                    ))
                }
            </div>
        );
    }

}

MoviesList.displayName = "MovieList";