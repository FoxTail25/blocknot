import React from 'react'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { nanoid } from 'nanoid'
import { BlocknotStore } from './blocknotStor'

let recordArr = [ 
  {id:nanoid(), text:['заголовок1', 'содержание1']}, 
  {id:nanoid(), text:['заголовок2', 'содержание2']},
  {id:nanoid(), text:['заголовок3', 'содержание3']}]

export const Blocknot = () => {




  return (
    <BlocknotStore.Provider value={recordArr}>

    <div>
        <Header/>
        <Main/>
    </div>
    
    </BlocknotStore.Provider>
  )
}
