import React from "react";
import cn from "class-names";

import styles from './heading.module.scss';

const getClassName = (as, tint = 'gray') => cn(
    styles.heading,
    [styles[as]],
    [styles[tint]]
);

const Heading = ({as, tint, children}) => {
    switch (as) {
        case 'h1':
            return <h1 className={getClassName('h1', tint)}>{children}</h1>;
        case 'h2':
            return <h2 className={getClassName('h2', tint)}>{children}</h2>;
        case 'h3':
            return <h3 className={getClassName('h3', tint)}>{children}</h3>;
        case 'h4':
            return <h4 className={getClassName('h4', tint)}>{children}</h4>;
        case 'h5':
            return <h5 className={getClassName('h5', tint)}>{children}</h5>;
        case 'h6':
        default:
            return <h6 className={getClassName('h6', tint)}>{children}</h6>;
    }
}

export default Heading;
