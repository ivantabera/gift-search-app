import React from 'react'
import PropTypes from 'prop-types';

export const GigGriditem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-3s">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GigGriditem.propTypes = {
     title: PropTypes.string.isRequired,
     url:   PropTypes.string.isRequired
}