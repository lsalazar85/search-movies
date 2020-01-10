import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import PosterDefault from './notimage.png'
import styles from "./cardMovie.module.css";


export const CardMovie = ({title, year, poster, id}) => {
    return (
        <Link to={`/detail/${id}`}>
            <div className={styles.cardMovie}>
                <div>
                    <img 
                        src={poster === 'N/A' ? PosterDefault : poster} 
                        className={poster === 'N/A' ? styles.notImage : null}
                        alt="Poster"
                    />
                </div>
                <div className={styles.titleYearContainer}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.year}>{year}</span>
                </div>
            </div>
        </Link>
    );
};

CardMovie.displayName = "CardMovie";

CardMovie.defaultProps = { 
    poster: PosterDefault,     
}

CardMovie.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    poster: string.isRequired,
};
