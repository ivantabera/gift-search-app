import React, { useState, useEffect } from 'react'
import { GigGriditem } from './GigGriditem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    // Declaramos la funcion getGif dentro del useEffect() para que solo se ejecute 1 ves cuando cargue la pagina
    // El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales:
    useEffect( () => {
        getGif();
    }, []);

    // haremos una funcion asincrona para recibir los datos de la API
    const getGif = async() => {

        // Guardamos nuestra url del api en una constante
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=fb36rhWkdzSVD5NPLfFas2Wryuq82AM2';
        // hacemos la peticion con un fetch
        const resp = await fetch( url );
        // desestructuramos la data para que solo nos de la data y evitar la demas informacion
        const {data} = await resp.json();

        // Extraemos la informacion barriendo cada imagen
        const gifs = data.map( img => {
            // el return es el que transforma cada elemento del arreglo img
            return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs);
    }

    // gitGif();

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
