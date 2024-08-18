import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <div className='footer-main' >
            <hr />
            <div className='footer-div'>
                <div>
                    <p>&copy; 2024 Edusity, All rights reserved</p>
                </div>
                <div className='footer-right'>
                    <p>Terms of Services <span>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer