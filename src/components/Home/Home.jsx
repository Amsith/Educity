import React from 'react'
import './home.css'
import Arrow from '../../assets/dark-arrow.png';

const Home = () => {
  return (
    <div className='home'>

      <div className='contain'>
        <h1>We Ensure better education for a better world</h1>
        <h4>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse odio quas dolor maiores asperiores quidem temporibus perspiciatis nam ea eligendi? </h4>
        <button className='explorebtn'>Explore more <img className='arrow' src={Arrow} width={30} alt="" />  </button>
      </div>


    </div>
  )
}

export default Home