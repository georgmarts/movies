'use client'

import { useState } from "react"
import './darkmode.style.css'

export default function DarkModeBtn() {

    const [translateX, setTranslateX] = useState(7)

    const darkModeStyle = {
        transform: `translateX(${translateX}px)`,
    }

    function handleDarkMode() {
        translateX != 33 ? setTranslateX(33) : setTranslateX(7),
        document.body.style.backgroundColor != 'black' ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white'

        let navigationElement = document.getElementsByTagName('a')
        for (let i=0, max=navigationElement.length; i < max; i++) {
                    navigationElement[i].style.color != "white" ? navigationElement[i].style.color = 'white' : navigationElement[i].style.color = 'black';
            }
        }

  return <main>
    <div onClick={handleDarkMode} className='dark-mode-btn'>
        <span className='sun-symbol'>&#9788;</span>
        <span className='moon-symbol'>&#9789;</span>
        <div style={darkModeStyle} className='dark-mode-btn-circle'></div>
    </div>
  </main>
}
