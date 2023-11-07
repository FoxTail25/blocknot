import { nanoid } from "nanoid";
import { createContext } from "react";

let recordArr = [
    { id: nanoid(), text: ['заголовок1', 'содержание1'] },
    { id: nanoid(), text: ['заголовок2', 'содержание2'] },
    { id: nanoid(), text: ['заголовок3', 'содержание3'] }
  ]

export const BlocknotStore = createContext(recordArr)