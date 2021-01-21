import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";
function About() {
  const About = styled.div`
 @media ${device.movile}{
  width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    align-items: center;
    gap:2em;
    justify-content:flex-start;
    p{
        width:80%;
    text-align: justify;
   font-size:x-large;

    }
  }
    @media ${device.tablet}{
  width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    align-items: center;
    gap:2em;
    justify-content:flex-start;
    p{
        width:80%;
    text-align: justify;
    font-size:x-large;


    }
 }
 @media ${device.desktop}{
  width: 100%;
  margin-top:3em;
  margin-bottom:3em;
    height: auto;
    display: grid;
    grid-template-columns:1fr 1fr;
   grid-template-rows:5em auto;
    font-family: Roboto;
    align-items: flex-start;
  text-align: center;
  justify-items:center;
    justify-content:flex-start;
    p{
      grid-row:2/3;
        width:70%;
    text-align: justify;
   font-size:xx-large;

    }
    h2{
      font-size:xx-large;

    }
 }
 }
  `;
  return (
    <About>
      <h2>Sobre mi </h2>
      <p>
        <b>Hola que tal soy Francisco Jimenez</b> , soy un programador
        apasionado por desarrollar software competente que se traduzca en
        oportunidades de negocio y, estoy dispuesto a trabajar en nuevos
        proyectos y vacantes que estos generen. Confío en que la creación de
        software efectivo, comprensible, escalable y eficaz es una excelente
        manera de abordar gran parte de las necesidades de las organizaciones y
        la sociedad al tiempo que genera valor en el proceso. Mas sobre mi Soy
        un programador apasionado en descubrir y desarrollar nuevas tecnologías
        y disfrutar el estudio de las mismas,soy una persona comprometida con mi
        trabajo que me genera plenitud con lo que hago.
      </p>
      <h2>Mas sobre mi </h2>
      <p>
        Soy un programador apasionado en descubrir y desarrollar nuevas
        tecnologías y disfrutar el estudio de las mismas,soy una persona
        comprometida con mi trabajo que me genera plenitud con lo que hago.
      </p>
    </About>
  );
}

export default About;
