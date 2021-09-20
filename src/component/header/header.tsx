import React from 'react';
import { Route } from 'react-router-dom';

/* components */
import Anchor from '../anchor/anchor';
/* style */
import style from './header.module.scss';

type Props = {
    className?: string,
};

const Header: React.FC<Props> = (
    { className = '', ...props }) => {
    return (
        <header className={ `${style.root} ${className}` }>
            <h1 className={ `${style.title}` }>NASA APOD APP</h1>
            <Route path="/:id">
                <Anchor variant="button" href="/">Back</Anchor>
            </Route>
        </header>
    );
};

export default Header;