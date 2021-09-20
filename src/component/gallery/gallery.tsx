import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

/* components */
import Image from '../image/image';
import AspectRatio from '../aspect-ratio/aspect-ratio';
/* style */
import style from './gallery.module.scss';
/* context */
import { AppContext } from '../../script/context/context';

type Props = {
    className?: string,
};

const Gallery: React.FC<Props> = (
    { className = '', ...props }) => {
    const { data, loaded } = useContext(AppContext);

    if (loaded) {
        return (
            <ul className={ `${style.root} ${className}` }>
                {data.map((item, id) => {
                    const src = item.media_type === 'video' ? item.thumbnail_url : item.url;

                    return (
                        <li className={ style.item } key={id}>
                            <Link to={ `${id}` } className={ style.link }>
                                <AspectRatio>
                                    <Image src={ src } alt={item.title} title={item.title} />
                                </AspectRatio>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <span>Loading images...</span>
       )
    }
}

export default Gallery;