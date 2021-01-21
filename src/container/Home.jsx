import React from "react";
import logo from "../assets/img/logo.png";
import face from "../assets/img/face.png";
import styled from "styled-components";
import { device } from "../utils/device";
import mancha from "../assets/img/wave.svg";
function Home() {
  const Page = styled.div`
    @media ${device.movil} {
      width: 100%;
      height: 100vh;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .logo {
        width: 80%;
      }
      .face {
        width: 100%;
      }
      h2 {
        width: 70%;
        text-align: center;
        height: 105px;
        font-family: "Roboto", sans-serif;
      }
    }
    @media ${device.tablet} {
      width: 100%;
      height: 100vh;
      align-items: center;
      display: grid;
      justify-content: center;
      grid-template-columns: 1fr 1fr 1fr;
      .logo {
        grid-column: 1/4;
        width: 70%;
        margin: auto;
      }
      .face {
        grid-column: 1/3;
        grid-row: 2/4;
        width: 100%;
      }
      h2 {
        grid-column: 2.5/4;
        grid-row: 2/4;
        width: 100%;
        font-size: 3em;
        text-align: center;
        height: 105px;
        font-family: "Roboto", sans-serif;
      }
    }
    @media ${device.desktop} {
      width: 100%;
      height: 100vh;
      background-image: url(${mancha});
      background-repeat: no-repeat;
      background-position: bottom;
   
      display: grid;
      grid-template-columns:repeat(10,1fr);
      grid-template-rows:repeat(10,1fr);
    
      .logo {
        grid-column:5/11;

               width: 80%;
        margin: auto;
      }
      .face {
          grid-column:1/6;
        grid-row:4/6;
        width: 90%;
      }
      h2 {
        grid-column:5/11;

        width: 100%;
        font-size: 3em;
        text-align: center;
        height: 105px;
        font-family: "Roboto", sans-serif;
      }
    }
  `;
  return (
    <Page>
      <img className="logo" src={logo} alt="logo" />

      <h2 className="subTitle">Desarrollador frontend y algo más.</h2>
      <img className="face" src={face} alt="face" />
    </Page>
  );
}

export default Home;
