import React from 'react'
import './about.css'
import aboutimg from '../../assets/about.png'

const About = () => {
    return (
        <div id='about-us' className='about-container'>

            <div className='about-image'>
                <img src={aboutimg} alt="" />
            </div>

            <div className='about-content'>
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nuturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic sint quos iure veniam non molestias eligendi quasi
                    rerum. Non illum vero explicabo esse omnis laudantium nisi
                    nesciunt consequuntur error exercitationem. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Hic, quod.</p>
            </div>



        </div>
    )
}

export default About