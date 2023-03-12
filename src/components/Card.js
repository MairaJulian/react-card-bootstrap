import React from 'react'
import PropTypes from 'prop-types'
import './card.css'


function Card({ title, imagen, text, url }) {
    return (
        <div className='card text-center bg-dark animate__animated animate__fadeInDown'>
            <div className='overflow'>
                <img src={imagen} alt='' className='card-img-top' />
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                    {
                        text ? text : `hsbdhbdscjsdbehbfsdbhbfdsjhhsbdhbdscjsdbeh`
                    }
                </p>
                <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
                    Navegar
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imagen: PropTypes.string,
    text: PropTypes.string
}

export default Card