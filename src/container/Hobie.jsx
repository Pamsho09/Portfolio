import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import { device } from "../utils/device";
function Hobie() {
  const [twitch_count, setTwitch_count] = useState(``);
  useEffect(() => {
    fetch(
      "https://api.twitch.tv/kraken/channels/485338072/follows?api_version=5&client_id=42zl30e3u05kycbz743yo0ygf2b2k6&limit=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setTwitch_count(data._total);
      });
  });

  const Hobie = styled.div`
    @media ${device.movil} {
      width: 100%;
      height: 100vh;
      font-family: Roboto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .twitch {
        width: 90%;
        height: 400px;
        border: none;
        border-radius: 1em;
      }
      .twitch_count {
        width: 90%;
        height: auto;
        border: none;
        border-radius: 1em;
      }
      h1,
      h3 {
        margin: 1em;
      }
      p {
        width: 100%;
        text-align: center;
      }
    }
    @media ${device.tablet} {
      width: 100%;
      height: 100vh;
      font-family: Roboto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .twitch {
        width: 90%;
        height: 800px;
        border: none;
        border-radius: 1em;
      }
      .twitch_count {
        width: 90%;
        height: auto;
        border: none;
        border-radius: 1em;
      }
      h1,
      h3 {
        margin: 1em;
      }
      p {
        width: 100%;
        text-align: center;
        font-size:x-large;
      }
    }
    @media ${device.desktop} {
      width: 100%;
      height: 100vh;
      font-family: Roboto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .twitch {
        width: 80%;
        height: 900px;
        border: none;
        border-radius: 1em;
      }
      .twitch_count {
        width: 90%;
        height: auto;
        border: none;
        border-radius: 1em;
      }
      h1,
      h3 {
        margin: 1em;
      }
      p {
        width: 100%;
        text-align: center;
      }
    }
  `;
  const Count = styled.span`
  @media ${device.movil}{ width: 50%;
    margin: 1em;
    font-size: 2em;
    border-radius: 10px;
    background-color: #9146ff;
    color: #fff;
    font-family: Roboto;
    font-weight: 700;
    text-align: center;}
  @media ${device.tablet}{ width: 6em;
    margin: 1em;
    font-size: 3em;
    border-radius: 10px;
    background-color: #9146ff;
    color: #fff;
    font-family: Roboto;
    font-weight: 700;
    text-align: center;}
  @media ${device.desktop}{ width: 20%;
    margin: 1em;
    font-size: 2em;
    border-radius: 10px;
    background-color: #9146ff;
    color: #fff;
    font-family: Roboto;
    font-weight: 700;
    text-align: center;}
   
  `;
  return (
    <Hobie>
      <h1>Mis hobbies</h1>
      <p>
        Me gusta compartir lo que aprendo mediante streams en la plataforma de
        twitch y youtube.
      </p>
      <h3>Mi twitch</h3>

      <Iframe
        url="https://player.twitch.tv/?channel=pamsho_js&parent=pamsho09.github.io&autoplay=false"
        className="twitch"
      />
      <Count>Followers {twitch_count}</Count>
    </Hobie>
  );
}

export default Hobie;
