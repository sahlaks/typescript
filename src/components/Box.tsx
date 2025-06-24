import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

function Box() {
    const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme.backgroundColor, fontFamily:theme.fontFamily, padding:'2px'}}>
        <h1 style={{color:theme.primaryColor}}>Testing</h1>
        <p style={{color:theme.secondaryColor}}>Again</p>
    </div>
  )
}

export default Box