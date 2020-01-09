import React from 'react';
import { Link } from 'react-router-dom';

export const BackToHomeButton = () => {
    return (
        <div>
            <Link to='/'>
                Back to home
            </Link>
        </div>
    );
};

BackToHomeButton.displayName = "BackToHomeButton"