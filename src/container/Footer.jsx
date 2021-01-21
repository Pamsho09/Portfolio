import React from "react";
import styled from "styled-components";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/face.svg";
import instagram from "../assets/icons/instagram.svg";
import { device } from "../utils/device";
function Footer({ color }) {
  let year = new Date();
  year = year.getFullYear();
  const Footer = styled.footer`
    @media ${device.mobile} {
      width: 100%;
      background-color: ${color.blueDark};
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      height: auto;
      display: flex;
      flex-direction: column;
      color: ${color.Text};
      font-family: Roboto;
      justify-content: center;
      padding: 1em;
      align-items: center;
      box-sizing: border-box;
      h4 {
        font-size: 1em;
      }
      a {
        text-decoration: none;
      }
    }
    @media ${device.tablet} {
      width: 100%;
      background-color: ${color.blueDark};
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      height: auto;
      display: flex;
      flex-direction: column;
      color: ${color.Text};
      font-family: Roboto;
      justify-content: center;
      padding: 1em;
      align-items: center;
      box-sizing: border-box;
      h4 {
        font-size: 1em;
      }
      a {
        text-decoration: none;
      }
    }
    @media ${device.desktop} {
      width: 100%;
      background-color: ${color.blueDark};
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      height: auto;
      display: flex;
      flex-direction: column;
      color: ${color.Text};
      font-family: Roboto;
      justify-content: center;
      padding: 1em;
      align-items: center;
      box-sizing: border-box;
      h4 {
        font-size: 1em;
      }
      a {
        text-decoration: none;
      }
    }
  `;
  const Container = styled.div`
  @media ${device.mobile}{display:flex;
      width: 70%;
      height: 4em;
      align-items:center;
      justify-content:space-between;}
  @media ${device.tablet}{display:flex;
      width: 70%;
      height: 4em;
      align-items:center;
      justify-content:space-between;}
  @media ${device.desktop}{display:flex;
      width: 50%;
      height: 4em;
      align-items:center;
      justify-content:space-between;}
  
  `;
  const SocialIcons = styled.img`
    width: 2em;

    &:hover {
      width: 3em;
    }
  `;
  return (
    <Footer>
      <h4>Contacto</h4>
      <Container>
        <a
          href="https://www.facebook.com/Pamsho_js-103246068308464"
          target="_blank"
        >
          <SocialIcons src={facebook} alt="facebook" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/francisco-jimenez-b413b51bb/"
        >
          {" "}
          <SocialIcons src={linkedin} alt="linkedin" />
        </a>
        <a target="_blank" href="https://www.instagram.com/pamsho_js/">
          <SocialIcons src={instagram} alt="instagram" />
        </a>
      </Container>

      <h4>All right reserved by Pamsho_js -{year}</h4>
    </Footer>
  );
}

export default Footer;
