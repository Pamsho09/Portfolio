import React from 'react'
import Home from './container/Home'
import Projects from'./container/Projects'
function App() {

  const colorTheme={

blueDark :'#19222A',
Text:'#FFFFFF'

  }
  
  return (
    <div>
    <Home/>
    <Projects color={colorTheme}/>
    </div>
  )
} 

export default App
