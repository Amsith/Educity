import React from 'react'
import './gallery.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import nexticon from '../../assets/next-icon.png'


const Gallery = () => {
    return (
        <>
            <div id='campus' className='gallery-container'>

                <div className='gallery-photo'>
                    <img src={gallery1} alt="" />
                </div>
                <div className='gallery-photo'>
                    <img src={gallery2} alt="" />
                </div>
                <div className='gallery-photo'>
                    <img src={gallery3} alt="" />
                </div>
                <div className='gallery-photo'>
                    <img src={gallery4} alt="" />
                </div>
            </div>

            <div className='gallery-button'>
                <button>See more here <img className='nextimg' src={nexticon}  alt="" /></button>
            </div>
        </>
    )
}

export default Gallery