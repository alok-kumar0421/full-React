import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = () => {
  return (
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s" alt="amazon img" />
          <button>Save <Bookmark size={20}/></button>
        </div>
        
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h6>Part-Time</h6>
            <h6>Senior Level</h6>
          </div>
        </div>
        <div className="bottom">
          <div className='details'>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card