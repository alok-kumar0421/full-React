import React from 'react'

function Card(props) {
    console.log(props);
  return (
      <div className="card">
        <img src={props.img}alt="" />
        <h4>Hi, {props.user}, age: {props.age} </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>view more</button>
      </div>
  )
}

export default Card