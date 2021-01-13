import React from 'react'
import Home from './container/Home'
import Projects from'./container/Projects'
import About from './container/About'
import Abilities from './container/Abilities'
function App() {

  const colorTheme={

blueDark :'#19222A',
Text:'#FFFFFF'

  }
  
  return (
    <div>
    <Home/>
    <Projects color={colorTheme}/>
    <About/>
    <Abilities  color={colorTheme}/>
    </div>
  )
} 

export default App
