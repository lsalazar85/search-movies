import React from 'react';
import { node } from 'prop-types';
import styles from "./title.module.css";

export const Title = ({ children }) => (
    <div className={styles.title}>
        <h1>{children}</h1>
    </div>
)

Title.displayName = "Title";

Title.propTypes = {
    children: node.isRequired,
};
