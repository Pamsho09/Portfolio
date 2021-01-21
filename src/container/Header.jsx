import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../utils/device";
import { Link, Element } from "react-scroll";
import icon from "../assets/icons/favicon.png";
function Header({ color }) {
  const [activeMenu, setActiveMenu] = useState(false);

  const animationMenu = keyframes`
 0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  
  }
  100% {
    opacity: 1;
  
  }
  
  `;
  const Header = styled.header`
    display: flex;

    @media ${device.movile} {
      position: fixed;
width: 4.5em;
      bottom: 5em;
      right: 2.1em;
      flex-direction: column-reverse;
      align-align-items: center;
      justify-content: center;
      gap: 0.5em;
      img {
        width: 4.5em;
        height: 4.5em;
        background: #fff;
        
        border-radius: 50%;
        box-shadow: 0 8px 6px -6px black;
      }
      nav,
      ul {
        display: ${activeMenu ? "flex" : "none"}; 
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5em;
      }
      li {
        font-family: Roboto;
      
        padding: 0.5em;
        border-radius: 1em;
        width: 100%;
        box-shadow: 0 8px 6px -6px black;
        list-style: none;
        background-color: #fff;
      }
    }
    @media ${device.tablet} {
      position: fixed;
      width: 100%;
      height: 5em;

      background-color: rgba(${color.blueDarkH}, 0.9);

      align-items: center;
      justify-content: space-between;
      gap: 0.5em;
      img {
        margin-left: 1em;
        width: 4em;
        height: 4em;
        background: #fff;
        border-radius: 50%;
      }
      nav {
        width: 70%;
      }
      ul {
        width: 100%;
      }
      nav,
      ul {
        display: flex;

        justify-content: center;
        align-items: center;
        gap: 0.5em;
      }
      li {
        font-family: Roboto;
        animation: 0.2s ${animationMenu} ease-out;
        text-align: center;
        padding: 0.5em;
        border-radius: 1em;
        width: 100%;

        list-style: none;
        color: #fff;
      }
      li:hover {
        font-size: 1.8rem;
      }
    }
    @media ${device.desktop} {
      position: fixed;
      width: 100%;
      height: 7em;

      background-color: rgba(${color.blueDarkH}, 0.9);

      align-items: center;
      justify-content: space-between;
      gap: 0.5em;
      img {
        margin-left: 1em;
        width: 5em;
        height: 5em;
        background: #fff;
        border-radius: 50%;
      }
      nav {
        width: 60%;
      }
      ul {
        padding: 1em;
        gap: 0.1em;
        width: 100%;
        justify-content: space-between;
      }
      nav,
      ul {
        display: flex;

        align-items: center;
      }
      li {
        font-size: 1.5rem;
        font-family: Roboto;
        animation: 0.2s ${animationMenu} ease-out;
        text-align: center;

        border-radius: 1em;
        width: 100%;

        list-style: none;
        color: #fff;
      }
      li:hover {
        font-size: 1.8rem;
      }
    }
  `;
  return (
    <>
      <Header>
        <img
          src={icon}
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
        />

        <nav>
          <ul>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <li>inicio</li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              <li>Proyectos</li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>Sobre mi</li>
            </Link>
            <Link
              to="abilities"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              <li>Habilidades</li>
            </Link>
            <Link
              to="hobie"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              <li>Hobbie</li>
            </Link>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              <li>Contacto</li>
            </Link>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export default Header;
