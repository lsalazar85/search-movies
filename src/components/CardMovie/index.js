import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "./cardMovie.module.css";


export const CardMovie = ({title, year, poster, id}) => {
    return (
        <Link to={`/detail/${id}`}>
            <div className={styles.cardMovie}>
                <div>
                    <img src={poster} alt="Poster"/>
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

CardMovie.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};
