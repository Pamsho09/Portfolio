import React from "react";
import { Link,  Element } from 'react-scroll'
import Header from "./container/Header";
import Home from "./container/Home";
import Projects from "./container/Projects";
import About from "./container/About";
import Abilities from "./container/Abilities";
import Hobie from "./container/Hobie";
import Footer from "./container/Footer";
function App() {
  const colorTheme = {
    blueDark: "#19222A",
    Text: "#FFFFFF",
    blueDarkH:"25, 34, 42 "
  };


  return (
    <>
  
      <Header color={colorTheme} />
       < Element name="home"><Home /></Element>
       < Element name="projects"> <Projects color={colorTheme} /></Element>
       < Element name="about"><About /></Element>
       < Element name="abilities"><Abilities color={colorTheme} /></Element>
       < Element name="hobie"> <Hobie /></Element>
       < Element name="footer">   <Footer color={colorTheme} /></Element>
   
    </>
  );
}

export default App;
