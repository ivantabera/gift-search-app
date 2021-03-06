import React/* , { useState, useEffect }  */from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GigGriditem } from './GigGriditem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } =  useFetchGifs(category);

    return (
        <>
            <h3> { category } </h3>

            {loading && <p>Cargando...</p>}
            
            <div className="card-grid">
                {
                    images.map( ( img ) => {
                        return <GigGriditem 
                                    key = { img.id }
                                    { ...img }
                                />
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}