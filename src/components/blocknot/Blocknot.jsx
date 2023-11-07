import React, { useContext, useState } from 'react'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { BlocknotStore } from './blocknotStor'



export const Blocknot = () => {

  let arrRecords = useContext(BlocknotStore)

  const [arrRecord, setArrRecord] = useState(arrRecords)
  const [blocknot, setBlocknot] = useState([])

  function setChangeField(record) {
    setBlocknot(record)
  }


  function changeRecord(id, header = false, record = false) {
    setArrRecord(arrRecord.map(el => {
      if (el.id === id) {
        if (header) {
          el.text[0] = header
        }
        if (record) {
          el.text[1] = record
        }
      }
      return el
    }))
  }

  let context = {
    arrRecord,
    changeRecord,
    setChangeField,
    blocknot,
  }

  return (
    <BlocknotStore.Provider value={context}>

      <div>
        <Header />
        <Main />
      </div>

    </BlocknotStore.Provider>
  )
}
