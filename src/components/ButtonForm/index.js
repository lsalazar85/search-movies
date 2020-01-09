import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttonForm.module.css';

export const ButtonForm = ({children}) => (
    <button className={styles.buttonForm}>
        {children}
    </button>
)

ButtonForm.displayName = "ButtonForm";

ButtonForm.propTypes = {
    children: PropTypes.node.isRequired,
}