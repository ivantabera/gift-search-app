import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/GetGif';
import { GigGriditem } from './GigGriditem';


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    // Declaramos la funcion getGif dentro del useEffect() para que solo se ejecute 1 ves cuando cargue la pagina
    // El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales:
    useEffect( () => {
        getGif( category ).
            then( imgs => setImages(imgs));
    }, [ category ]);

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( ( img ) => {
                        return <GigGriditem 
                                    key = { img.id }
                                    { ...img }
                                />
                    })
                };
            </div>
        </>
    )
}
