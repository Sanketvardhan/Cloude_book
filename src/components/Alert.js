import React from 'react'

function Alert({type,message}) {
    const caps=(word)=>{
        const capword=word.toLowerCase();
        return capword.charAt(0).toUpperCase()+capword.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
      <div className={`alert alert-success alert-${type} fade show`} role="alert">
        <strong>{caps(type)}</strong>: {message}
      </div>
    </div>
  )
}

export default Alert
