import React from 'react';

/* style */
import style from './anchor.module.scss';

/* helper */
import handleModifiers from '../../script/helper/handle-modifiers/handle-modifiers';

type Props = {
    children: React.ReactNode,
    variant?: string,
    className?: string,
    target?: string,
    href?: string,
};

const Anchor: React.FC<Props> = (
    { variant = 'default', className = '', ...props }) => {
    const modifier = handleModifiers(variant, style);

    return (
        <a className={ `${modifier} ${className}` }
            href={ props.href } target={ props.target }>
            { props.children }
        </a>
    );
};

export default Anchor;
