import React from "react";
import styled, { keyframes } from "styled-components";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import mysql from "../assets/icons/mysql.svg";
import node from "../assets/icons/node.svg";
import php from "../assets/icons/php.svg";
import react from "../assets/icons/react.svg";
import sass from "../assets/icons/sass.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import csharp from "../assets/icons/csharp.svg";
import git from "../assets/icons/git.svg";
import linux from "../assets/icons/linux.svg";
import { device } from "../utils/device";
function Abilities({ color }) {
  const Abilities = styled.div`
    @media ${device.movile} {
      text-align: center;
      background: ${color.blueDark};
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      font-family: Roboto;
      gap: 1em;
      color: ${color.Text};
      border-radius: 23px 23px 53px 0px;
      h1 {
        margin: 2em 0;
      }
      p {
        width: 60%;
      }

      ul {
        width: 70%;
        display: grid;
        list-style: none;
        gap: 2em;
      }
    }

    @media ${device.tablet} {
     
      text-align: center;
      background: ${color.blueDark};
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      font-family: Roboto;
      gap: 1em;
      color: ${color.Text};
      border-radius: 23px 23px 53px 0px;
      h1 {
        margin: 2em 0;
      }
      p {
        width: 60%;
      }

      ul {
        margin:1em;
        width: 50%;
        display: grid;
        list-style: none;
        gap: 2em;
      }
    }

    @media ${device.desktop} {
      text-align: center;
      background: ${color.blueDark};
      width: 100%;
      height: auto;
      min-height:1000px;
      display: grid;
      grid-template-rows:3em auto;
      grid-auto-columns:1fr 1fr;
     
      justify-content: center;
      align-items: center;
      justify-items:center;
font-size:xx-large;
      font-family: Roboto;
      gap: 1em;
      color: ${color.Text};
      border-radius: 23px 23px 53px 0px;
      h1 {
        grid-column:1/3;
        margin: 2em 0;
      }
      p {
        grid-column:1/2;
        grid-row:2/3;
        width: 60%;
      }

      ul {
        width: 70%;
        display: grid;
        list-style: none;
        gap: 2em;
      }
    }
  `;
  const fadeIn = keyframes`
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
  const GridCard = styled.div`
    @media ${device.movile} {
     
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
      width: 80%;
      img {
        animation: 2s ${fadeIn} ease-out;
        width: 80%;
        margin:1em;

        border-radius: 10px;

        &:hover {
          width: 60%;
position: absolute;
          background-color: #fff;
        }
      }
    }
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
      width: 60%;
      img {
        animation: 2s ${fadeIn} ease-out;
        width: 90%;

        border-radius: 10px;

        &:hover {
          width: 100%;

          background-color: #fff;
        }
      }
    }
    @media ${device.desktop} {
      grid-row:3/4;
      display: grid;
      justify-self:center;
      justify-items:center;
      align-items:center;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
      width: 80%;
      img {
        animation: 2s ${fadeIn} ease-out;
        width: 80%;

        border-radius: 10px;

        &:hover {
          width: 60%;

          background-color: #fff;
        }
      }
    }
  `;
  return (
    <Abilities>
      <h1>Habilidades</h1>
      <p>Cuento con la experiencia en las siguientes areas:</p>
      <GridCard>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
        <img src={sass} alt="sass" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={mysql} alt="mysql" />
        <img src={node} alt="node" />
        <img src={php} alt="php" />

        <img src={csharp} alt="csharp" />
        <img src={git} alt="git" />
        <img src={linux} alt="linux" />
      </GridCard>
      <h3>Mi educacion</h3>
      <ul>
        <li>
          <b>Universidad Autónoma Metropolitana Azcapotzalco:</b>Licenciatura en
          Ingeniería en Computación 2020{" "}
        </li>
        <li>
          <b>
            Centro de Bachillerato tecnologico Industrial y de servicios No.59:
          </b>{" "}
          Tecnico en programacion 2017-2020{" "}
        </li>
      </ul>
    </Abilities>
  );
}

export default Abilities;
