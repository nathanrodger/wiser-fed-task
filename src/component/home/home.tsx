import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* components */
import Gallery from '../gallery/gallery';
import ImageDetails from '../image-details/image-details';

const Home = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Gallery />
            </Route>
            <Route path="/:id">
                <ImageDetails />
            </Route>
        </Switch>
    )
}

export default Home;