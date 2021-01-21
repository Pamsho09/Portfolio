import React from "react";
import styled, { keyframes } from "styled-components";
import Github from "../assets/img/github.svg";
import Browser from "../assets/img/browser.svg";
import { device } from "../utils/device";
function Card({ name, stack, img, mode, demo, git }) {
  const Card = styled.div`
    @media ${device.movile} {
      width: 90%;
      height: 310px;
      border-radius: 30px 30px 30px 30px;
      background-color: rgba(222, 219, 218, 0.5);
      display: ${mode ? "block " : "none"};
      &:hover {
        width: 95%;
        height: 480px;
        z-index: 1111111111;
        position: relative;
        transition: all 1s ease-in-out;
      }
    }
    @media ${device.tablet} {
      width: 90%;
      height: 180px;
      border-radius: 30px 30px 30px 30px;
      background-color: rgba(222, 219, 218, 0.5);
      display: ${mode ? "block " : "none"};
      &:hover {
        width: 95%;
        height: 310px;
        z-index: 1111111111;
        position: relative;
        transition: all 1s ease-in-out;
      }
    }
    @media ${device.desktop} {
      width:600px;
   
      border-radius: 30px 30px 30px 30px;
      background-color: rgba(222, 219, 218, 0.5);
      display: ${mode ? "block " : "none"};
      height: 400px;
      &:hover {
     
        height: 540px;
        z-index: 1111111111;
        position: relative;
        transition: all 1s ease-in-out;
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
  const Data = styled.div`
    color: #fff;
    display: none;
    justify-content: center;

    align-items: space-between;
    text-align: center;
    grid-template-columns: 1fr;
    animation-delay: 1s;
    width: 100%;
    font-family: Roboto;
    gap: 0.3rem;
    h3 {
      margin: auto;
    }
    ${Card}:hover & {
      animation: 2s ${fadeIn} ease-out;
      display: grid;
    }
  `;
  const Img = styled.img`
   @media ${device.movile} { width: 100%;
    height:310px;
    border-radius: 30px 30px 30px 30px;

    &:hover {
      z-index: 1111111111;
      position: relative;
      transition-property: all;
      transition-duration: 0.2s;
    }}
   @media ${device.tablet} { width: 100%;
    height: 180px;
    border-radius: 30px 30px 30px 30px;

    &:hover {
      z-index: 1111111111;
      position: relative;
      transition-property: all;
      transition-duration: 0.2s;
    }}
   @media ${device.desktop} {
    width: 100%;
    height: 400px;
    border-radius: 30px 30px 30px 30px;

    &:hover {
      z-index: 1111111111;
      position: relative;
      transition-property: all;
      transition-duration: 0.2s;
    }
   }
   
  `;
  const Link = styled.div`
    display: flex;
    justify-content: space-between;
height: 4rem;
    width: 100%;
    a {
      text-decoration: none;
      margin: auto;
      width: 4rem;
    }
   
  `;
const Icon = styled.img`

text-decoration: none;
      margin: auto;
      width: 3rem;
      &:hover {
        width: 4rem;

      }
      
      `
  return (
    <Card>
      <Img src={img} />
      <Data>
        <h3>{name}</h3>
        <h4>Stack:{stack}</h4>

        <Link>
          <a href={git} target="_blank">
            {" "}
            <Icon src={Github} alt="" />
          </a>
          <a href={demo} target="_blank">
            {" "}
            <Icon src={Browser} alt="" />
          </a>
        </Link>
      </Data>
    </Card>
  );
}

export default Card;
