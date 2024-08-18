import React from 'react'
import './program.css'
import prograrm1 from '../../assets/program-1.png'
import prograrm2 from '../../assets/program-2.png'
import prograrm3 from '../../assets/program-3.png'


const Program = () => {
  return (
    <div>

    

      <div className='programs'>

        <div className='program'>
          <div>
            <div><img src={prograrm1} alt="" /></div>
            <div className='shadow'>
              <h4>First Programe</h4>
            </div>
          </div>
        </div>

        <div className='program'>
          <div>
            <div><img src={prograrm2} alt="" /></div>
            <div className='shadow'>
              <h4>Second Programe</h4>
            </div>
          </div>
        </div>

        <div className='program'>
          <div>
            <div><img src={prograrm3} alt="" /></div>
            <div className='shadow'>
              <h4>Third Programe</h4>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Program