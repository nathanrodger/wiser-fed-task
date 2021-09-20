import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

/* components */
import Image from '../image/image';
/* style */
import style from './image-details.module.scss';
/* context */
import { AppContext } from '../../script/context/context';

const ImageDetails = () => {
    const { data, loaded } = useContext(AppContext);
    const location = useLocation();
    const id = parseInt(location.pathname.replace(/^\//g, ''));

    if (loaded) {
        const src = data[id].media_type === 'video' ? data[id].thumbnail_url : data[id].url;

        return (
            <div className={ style.root }>
                <div>
                     <h2>{ data[id].title }</h2>
                     <p>{ data[id].explanation }</p>
                 </div>
                 <Image className={ style.image } src={ src } alt={data[id].title} />
            </div>
        )
    } else {
        return (
            <span>Loading content...</span>
       )
    }
}

export default ImageDetails;