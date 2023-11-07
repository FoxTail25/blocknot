import React from 'react'

export const MenuItem = ({id, text}) => {

   const [header, body] = text 

  return (
    <div>
        <p>{header} <br/> {body}</p>
    </div>
  )
}
