import React from 'react'

export const GigGriditem = ({ title, url }) => {
    return (
        <div>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
