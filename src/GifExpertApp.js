import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon ball'])

    //dos maneras de agregar un elemento al arreglo
    /* const handleAdd = () => {
        // setCategories([...categories, 'Bob Sponja']);
        setCategories( cate => [...categories, 'Bob sponja']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}

