import React from 'react';
import { string } from 'prop-types';

export const Emoji = ({label, symbol}) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);

Emoji.displayName = "Emoji";

Emoji.propTypes = {
    label: string.isRequired,
    symbol: string.isRequired,
}