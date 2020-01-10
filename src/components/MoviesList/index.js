import React, { Component } from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from "classnames";
import { CardMovie } from '../CardMovie';
import styles from "./moviesList.module.css";

export class MoviesList extends Component {

    static propTypes = {
        movies: array.isRequired,
    }

    render() {
        const { movies } = this.props;
        return (
            <div className={classNames(styles.moviesListContainer, isEmpty(movies) && styles.fadeIn)}>
                {
                     movies.map(movie => (
                         <CardMovie 
                            id={movie.imdbID}
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