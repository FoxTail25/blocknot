import React, { useContext } from 'react'
import { BlocknotStore } from '../../blocknotStor'
import { MenuItem } from './menuItem/MenuItem'
import a from './sassCSS/menu.module.css'

export const Menu = () => {

    const context = useContext(BlocknotStore).arrRecord

    let record = context.map(el => <MenuItem key={el.id} {...el}/>)

    return (
        <aside>
            <h3>выбор записи</h3>
            <nav>
                {record}
            </nav>
        </aside>
    )
}
