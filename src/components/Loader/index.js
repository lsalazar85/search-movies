import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './loader.module.css';

export const Loader = () => (
    <div className={styles.loader}>
        <CircularProgress color="secondary" />
    </div>
)


Loader.displayName = "Loader";