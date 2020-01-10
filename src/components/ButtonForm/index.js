import React from 'react';
import { node } from 'prop-types';
import styles from './buttonForm.module.css';

export const ButtonForm = ({ children }) => (
    <button className={styles.buttonForm}>
        {children}
    </button>
)

ButtonForm.displayName = "ButtonForm";

ButtonForm.propTypes = {
    children: node.isRequired,
}