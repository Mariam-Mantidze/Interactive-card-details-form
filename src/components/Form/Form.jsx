import styled from "styled-components";
import MobileBackground from "/images/bg-main-mobile.png";

import BackCard from "/images/bg-card-back.png";
import Card from "./Card";

export default function Form() {
  return (
    <>
      <CardContainer>
        <img className="back" src={BackCard} alt="back of a card" />
        <Card />
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  padding: 32px 16px 51px 0;
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & .back {
    width: 285px;
  }
`;
