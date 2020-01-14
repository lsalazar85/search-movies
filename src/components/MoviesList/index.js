import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from "classnames";
import { CardMovie } from '../CardMovie';
import styles from './moviesList.module.css';


 export const MoviesList = ({movies})=> {
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

MoviesList.displayName = "MovieList";

MoviesList.prototypes = {
    movies: array.isRequired,
}