 import React, {useState, useEffect} from 'react'
 
 export const useDebouncerPokemon = (input: string = '', timerDispatch: number = 500) => {
   const [valueInput, setValueInput] = useState(input);

   useEffect(() => {
     
    const timer = setTimeout(() => {
      setValueInput(input);
    }, timerDispatch)
   
     return () => {
       clearTimeout(timer)
     }
   }, [input])
   
   return valueInput
 };