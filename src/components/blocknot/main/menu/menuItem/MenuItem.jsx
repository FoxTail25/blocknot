import React, { useContext } from 'react'
import { Blocknot } from '../../../Blocknot'
import { BlocknotStore } from '../../../blocknotStor'

export const MenuItem = ({id, text}) => {

   
   const changeField = useContext(BlocknotStore).setChangeField
   

  return (
    <div>
        <p onClick={()=>changeField([id, ...text])}>{text[0]} <br/></p>
    </div>
  )
}
