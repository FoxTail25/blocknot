import React, { useContext } from 'react'
import { BlocknotStore } from '../../blocknotStor'
import { MenuItem } from './menuItem/MenuItem'

export const Menu = () => {

    const context = useContext(BlocknotStore)

    // console.log(context)

    let record = context.map(el => <MenuItem key={el.id} {...el}/>)

    // console.log(record)

    return (
        <aside>
            <nav>
                {record}
            </nav>
        </aside>
    )
}
