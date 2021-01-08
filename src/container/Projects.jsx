import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

    height: 100vh;
    background-color: ${color.blueDark};
    border-radius: 23px 23px 53px 0px;
    display: grid;
    padding-top:1em;
    justify-content:space-between;
  
    ${active?'  overflow:scroll;':''}
    
    grid-template-columns: 1fr ${active ?'1fr':''};
    gap: 0.25em;
    h3 {
      font-family: "Roboto", sans-serif;
      color: ${color.Text};
      justify-content: center;
      display: flex;
      align-items: center;
      text-align: center;
      width: 90%;
      height: 64.5px;
    }
    .text-active {
      width: 100%;
    }
    .text-active h6 {
      color: ${color.Text};
      font-family: "Roboto", sans-serif;
      font-size: 1em;

      margin: 0.5em;
    }
    .right {
      /* display: flex;
     flex-direction:column;
      align-items: center;
justify-content:center;

      gap:1em; */
      width: 100%;
      justify-content: center;
      display:grid;
      justify-items:center;
      height: 80vh;
      gap:1em;
    }
    .left {
        
      justify-content: center;
      justify-self: center;
      display: ${active?'flex':'none'};
      flex-direction: column;
      align-items: center;

      gap: 0.5em;
    }
  `;
  console.log(project.length);
  return (
    <Container>
        
        {active?'' :<h3>Mis proyectos</h3>}
      <div className="right">
  
        {project &&
          project.map((e) =>
            e.id < 3 ? (
              <Card key={e.id} {...e} mode={true} />
            ) : (
              <Card key={e.id} {...e} mode={active} />
            )
          )}
      </div>
      <div className="left">
      {active? <h3>Mis proyectos</h3>:' '}
        {project &&
          project.map((e) =>
            e.id < 3 ? (
              <Card key={e.id} {...e} mode={true} />
            ) : (
              <Card key={e.id} {...e} mode={active} />
            )
          )}
      </div>

      <div className="text-active">
        <h6 onClick={() => setActive(!active)}>Mostrar {active?'menos':'mas'} </h6>
      </div>
    </Container>
  );
}

export default Projects;
