import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../utils/device";
import Card from "../components/Card";
function Projects({ color }) {
  console.log(color);

  const [project, setProject] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/Pamsho09/Abilies/main/abilities.json"
    );
    const data = await res.json();
    console.table(data.projects);
    setProject(data.projects);
  }, []);
  const Container = styled.div`

    width: 100%;
   
    @media ${device.movile}{
      height: 100vh;
    background-color: ${color.blueDark};
    border-radius: 23px 23px 53px 0px;
    display: grid;
    padding-top: 1em;
    align-items: flex-start;
    justify-content: center;
    overflow:scroll;
    grid-template-columns: 1fr;
    gap: 0.25em;
    h3 {
      font-family: "Roboto", sans-serif;
      color: ${color.Text};
      font-size: 2em;
      justify-content: center;
      display: flex;
      align-items: center;
      text-align: center;
      width: 90%;
      height: auto;
    }
    .text-active {
      width: 100%;
      text-align: center;
    }
    .text-active h6 {
      color: ${color.Text};
      font-family: "Roboto", sans-serif;
      font-size: 1em;

      margin: 1em;
    }
    .right {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      flex-direction: column;

      row-gap: 1em;
    }
  } 
  @media ${device.tablet}{
    height: auto;
    transition: 2s height;
    background-color: ${color.blueDark};
    border-radius: 23px 23px 53px 0px;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
  align-items: center;
    overflow:scroll;
    grid-template-columns: 1fr ;
    gap: 0.25em;
    h3 {
      font-family: "Roboto", sans-serif;
      color: ${color.Text};
      font-size: 2em;
      justify-content: center;
      display: flex;
      align-items: center;
      text-align: center;
      width: 90%;
      height:2em;
    }
    .text-active {
      width: 100%;
      text-align: center;
      grid-column:1/3;
    }
    .text-active h6 {
      color: ${color.Text};
      font-family: "Roboto", sans-serif;
      font-size: 1em;

      margin: 1em;
    }
    .right {
      
      width: 100%;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      gap: 1em;
    }
  }
  @media ${device.desktop}{
    height: auto;
    min-height:80vh;
    background-color: ${color.blueDark};
    border-radius: 0px 0px 53px 0px;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    align-items:center;
    justify-content: center;
  position: relative;
  padding-bottom:4em;
    gap: 1em;
    h3 {
      font-family: "Roboto", sans-serif;
      color: ${color.Text};
      font-size: 2em;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 90%;
      height: auto;
    
    }
    .text-active {
      position: absolute;
      text-align: center;
      bottom:0;
      right:0;
   
    }
    .text-active h6 {
      color: ${color.Text};
      font-family: "Roboto", sans-serif;
      font-size: 2em;
      border-radius:50px;
      padding: 30px;

    }
    h6:hover {

      background-color:rgba(256,256,256,0.5);
    }
    .right {
margin:1em;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    
      gap: 1em;
    
    }
  }
  `;
  console.log(project.length);
  return (
    <Container>
      <h3>Mis proyectos</h3>
      <div className="right">
        {project &&
          project.map((e, index) => 
            <Card key={e.id} {...e} mode={index < 4 ? true : active} />
          )}

        {project.length > 4 ? (
          <div className="text-active">
            <h6 onClick={() => setActive(!active)}>
              Mostrar {active ? "menos" : "mas"}{" "}
            </h6>
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default Projects;
