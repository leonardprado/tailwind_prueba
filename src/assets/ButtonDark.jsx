import React, { useState } from 'react'



export default function ButtonDark() {
    const [darkMode, setDarkMode] = useState(false)
      //  setDarkMode(!darkMode)

    const handleClick = () => {
        document.documentElement.classList.toggle("dark")
    }
    const textButtonDarkMode = darkMode ? "Light Mode" : "Dark Mode"
  return (
    <button onClick={handleClick} className="bg-gradient-to-r from-indigo-800 to-fuchsia-300 text-white px-4 py-2 rounded shadow-md focus:ring hover:from-fuchsia-300 hover:to-indigo-800 first-letter:transition-all active:transform active:translate-y-1 ">
 {textButtonDarkMode}
</button>
  )
}
