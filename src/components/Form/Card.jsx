import styled from "styled-components";
import FrontCard from "/images/bg-card-front.png";

export default function Card() {
  return (
    <>
      <Front src={FrontCard} alt="" />
    </>
  );
}

const Front = styled.img`
  position: absolute;
  bottom: -20%;
  left: 17px;
  width: 286px;
`;
