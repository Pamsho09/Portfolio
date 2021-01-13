import React from "react";
import styled ,{keyframes}from "styled-components";
import Github from "../assets/img/github.svg";
import Browser from "../assets/img/browser.svg";
function Card({ name, stack, img, mode,demo,git }) {
  const Card = styled.div`
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
      transition:all  1s ease-in-out;
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
`
  const Data = styled.div`
    color: #fff;
    display: none;
    justify-content: center;

    align-items: space-between;
    text-align: center;
    grid-template-columns: 1fr;
 animation-delay:1s;
    width: 100%;
    font-family: Roboto;
    gap: 0.3rem;
    h3 {
      margin: auto;
    }
    ${Card}:hover & {

    
     animation:2s ${fadeIn}  ease-out ;
      display: grid;
      
    }
  `;
  const Img = styled.img`
    width: 100%;
    height: 180px;
    border-radius: 30px 30px 30px 30px;

    &:hover {
      z-index: 1111111111;
      position: relative;
      transition-property: all;
      transition-duration: 0.2s;
    }
  `;
  const Link = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
   a, img {
     text-decoration:none;
      margin: auto;
      width: 3rem;
    }
  `;

  return (
    <Card>
      <Img src={img} />
      <Data>
        <h3>{name}</h3>
        <h4>Stack:{stack}</h4>

        <Link>
         <a href={git} target="_blank"> <img src={Github} alt="" /></a>
         <a href={demo} target="_blank"> <img src={Browser} alt="" /></a>
        </Link>
      </Data>
    </Card>
  );
}

export default Card;
