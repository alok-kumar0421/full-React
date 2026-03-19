import React from 'react'

const App = () => {
  function click(val){
      console.log(val)
    }
  return (
    <div className="click" onClick={(click(val))}>
      <button>
        click me
      </button>
    </div>
  )
}

export default App