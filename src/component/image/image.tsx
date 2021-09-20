import React from 'react';

/* style */
import style from './image.module.scss';

/* helper */
import handleModifiers from '../../script/helper/handle-modifiers/handle-modifiers';

type Props = {
    src: string,
    alt: string,
    variant?: string,
    className?: string,
    title?: string,
};

const Image: React.FC<Props> = (
    { variant = 'default', className = '', ...props }) => {
    const modifier = handleModifiers(variant, style);

    let title;
    if (props.title) {
        title = <span className={ style.title }>{ props.title }</span>;
    }

    return (
        <React.Fragment>
            <img className={ `${modifier} ${className}` }
                src={ props.src } alt={ props.alt } />
            { title }
        </React.Fragment>
    );
}

export default Image;
