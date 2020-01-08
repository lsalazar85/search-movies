import React from 'react';
import PropTypes from 'prop-types';
import styles from "./cardMovie.module.css";

export const CardMovie = ({title, year, poster}) => {
    return (
        <div className={styles.cardMovie}>
            <div>
                <img src={poster} alt="Poster"/>
            </div>
            <div className={styles.titleYearContainer}>
                <span className={styles.title}>{title}</span>
                <span className={styles.year}>{year}</span>
            </div>
        </div>
    );
};

CardMovie.displayName = "CardMovie";
CardMovie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};
