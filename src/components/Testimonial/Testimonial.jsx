import React from 'react'
import './testimonial.css'

import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint:768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          } 
          
        ]
      };
      
        return (

            <div id='testimonial' className='testimain-div'>

                <Slider {...settings}>
                    <div className='testi-div'>
                        <div className='testi-content'>
                            <div className='top-div'>
                                <img src={user1} alt="" />
                                <div>
                                    <h5>William jakson 1</h5>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <div className='test-bottom'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem.
                            </div>
                        </div>
                    </div>
                    <div className='testi-div'>
                        <div className='testi-content'>
                            <div className='top-div'>
                                <img src={user2} alt="" />
                                <div>
                                    <h5>William jakson 2</h5>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <div className='test-bottom'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem.
                            </div>
                        </div>
                    </div>
                    <div className='testi-div'>
                        <div className='testi-content'>
                            <div className='top-div'>
                                <img src={user3} alt="" />
                                <div>
                                    <h5>William jakson 3</h5>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <div className='test-bottom'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem.
                            </div>
                        </div>
                    </div>
                    <div className='testi-div'>
                        <div className='testi-content'>
                            <div className='top-div'>
                                <img src={user4} alt="" />
                                <div>
                                    <h5>William jakson 4</h5>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <div className='test-bottom'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem. sit amet consectetur adipisicing elit. Deleniti, dolorem.
                            </div>
                        </div>
                    </div>

                </Slider>

            </div >
        )
    }

    export default Testimonial