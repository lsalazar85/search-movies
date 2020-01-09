import React from 'react';
import { BackToHomeButton } from '../../components/BackToHomeButton';
import NotFoundImg from './404.png';

export const NotFound = () => (
    <div>
        <h1>Page Not Found</h1>
        <img src={NotFoundImg} alt='404 Not Found' />
        <BackToHomeButton>
            Back To home
        </BackToHomeButton>
    </div>
)

NotFound.displayName = "NotFound";