import React from "react";
import styled from "styled-components";
function Card({ name, description, img, mode }) {
  const Card = styled.div`
    width: ${mode ? "90% " : "100px"}; 
    height: ${mode ? "129px " : "100px"};

    display: ${mode ? "block " : "none"};
    .card-img {
      width: 100%;
 
      border-radius: 30px 30px 30px 0px;
    }
  `;
  return (
    <Card>
      <img className="card-img" src={img} />
    </Card>
  );
}

export default Card;
