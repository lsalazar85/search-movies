import React from 'react';
import { node } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './backButton.module.css';


export const BackToHomeButton = ({ children }) => {
    return (
        <div className={styles.backButton}>
            <Link to='/'>
                {children}
            </Link>
        </div>
    );
};

BackToHomeButton.displayName = "BackToHomeButton";

BackToHomeButton.propTypes = {
    children: node.isRequired,
}