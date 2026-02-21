import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
      <div className="card">
        <div className="top">
          <img src={props.link} alt="amazon img" />
          <button>Save <Bookmark size={20}/></button>
        </div>
        
        <div className="center">
          <h3>{props.brand} <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h6>Part-Time</h6>
            <h6>Senior Level</h6>
          </div>
        </div>
        <div className="bottom">
          <div className='details'>
              <h3>{props.price}</h3>
              <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card