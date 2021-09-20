import React from 'react';

/* style */
import style from './aspect-ratio.module.scss';

type Props = {
    children: React.ReactNode,
    className?: string,
};

const AspectRatio: React.FC<Props> = (
    { className = '', ...props }) => {

    return (
        <div className={ `${style.default} ${className}`}>
            { props.children }
        </div>
    );
}

export default AspectRatio;
