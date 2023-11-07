import React, { useEffect, useRef, useState } from 'react'
import t from './sassCSS/textfield.module.css'

// let rowQuantity

export const TextField = () => {

    const ta = useRef(null)

    const [textField, setTextField] = useState('некий текст')
    useEffect(()=> {
       let rowQuantity = ta.current.value.split(/\n/).length
        console.log(rowQuantity)
        ta.current.style.height = (rowQuantity * 16) + "px";
        console.log(ta.current.style.height)
    }
    ,[textField])

  
    return <div className={t.body}>

        <h2>
            Заголовок
        </h2>

        <textarea value={textField} ref={ta} onChange={(e)=>setTextField(e.target.value)} >
            
        </textarea>

    </div>

}
