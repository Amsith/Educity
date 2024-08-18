import React from 'react'
import  './header.css'


const Header = (props) => {
    return (
        <div className='title-head'>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )
}

export default Header