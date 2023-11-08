import React, { useContext, useEffect, useRef, useState } from 'react'
import t from './sassCSS/textfield.module.css'
import { BlocknotStore } from '../../blocknotStor'


export const TextField = () => {



    const blocknot = useContext(BlocknotStore).blocknot
    const changeRecord = useContext(BlocknotStore).changeRecord
    const delRecord = useContext(BlocknotStore).delRecord
    
    const [headerInp, setHeaderInp] = useState(false)

    const [header, setHeader] = useState([])
    const [ta, setTa] = useState([])

    useEffect(() => {
        setHeader(blocknot[1])
        setTa(blocknot[2])
        console.log(blocknot[2])
    }, [blocknot])

    let id = blocknot[0]

    function stopEditHead(e) {
        setHeaderInp(false)
        changeRecord(id, header, false)
    }

    const headField = useRef(null)
    
    useEffect(() => {
        if (headerInp) {
            headField.current.focus()
        }
    }, [headerInp])

    return <div className={t.textblock}>
        <h2>

            {
                headerInp
                    ?
                    <input value={header} ref={headField} onChange={(e) => setHeader(e.target.value)} onBlur={(e) => stopEditHead(e.target.value)} />
                    :
                    <span onClick={() => setHeaderInp(true)}>
                        {header}
                    </span>
            }
        </h2>

        <textarea value={ta} onChange={(e) => setTa(e.target.value)} onBlur={() => changeRecord(id, false, ta)}>

        </textarea>
        <button onClick={()=>delRecord(id)}>Удалить запись</button>
    </div>

}
