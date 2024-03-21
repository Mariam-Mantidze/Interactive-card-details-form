import styled from "styled-components";
import FrontCard from "/images/bg-card-front.png";
import BackCard from "/images/bg-card-back.png";
import MobileBackground from "/images/bg-main-mobile.png";

export default function Card() {
  return (
    <CardBox>
      <CardContainer>
        <FrontCardContainer>
          <div className="circles">
            <div className="circle"></div>
            <div className="small-circle"></div>
          </div>

          <span className="numbers">0000 0000 0000 0000</span>

          <div className="name-date">
            <span className="name">JANE APPLESEED</span>
            <span className="date">00/00</span>
          </div>
        </FrontCardContainer>

        <BackContainer>
          <span className="cvc">000</span>
        </BackContainer>
      </CardContainer>
    </CardBox>
  );
}

const CardBox = styled.div`
  /* padding: 32px 16px 51px 0; */
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: rgba(255, 255, 255, 1);
  height: 240px;
  display: flex;
  align-items: center;

  justify-content: center;
`;

const FrontCardContainer = styled.div`
  background-image: url(${FrontCard});
  background-size: cover;
  width: 285px;
  height: 156.21px;
  padding: 17px 20px 19.6px 19px;
  top: 28px;
  left: 16px;
  z-index: 2;
  position: absolute;

  & .circles {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .circle {
    width: 30.19px;
    height: 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
  }

  .small-circle {
    width: 13px;
    height: 13px;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
  }

  & .numbers {
    font-size: 18px;
    line-height: 22.97px;
    letter-spacing: 2.200000047683716px;
    text-align: left;
    display: inline-block;
    margin-top: 37px;
  }

  & .name-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 17px;
  }

  & .name {
    font-size: 9px;
    line-height: 11.48px;
    letter-spacing: 1.2857142686843872px;
    text-align: left;
  }

  & .date {
    font-size: 9px;
    line-height: 11.48px;
    letter-spacing: 1.2857142686843872px;
    text-align: right;
  }
`;

const BackContainer = styled.div`
  background-image: url(${BackCard});
  background-size: cover;
  width: 285px;
  height: 156.21px;
  z-index: 1;
  top: -60px;
  right: 16px;
  position: absolute;
  padding: 65px 0 0px 231px;

  & .cvc {
    font-size: 9px;
    font-weight: 500;
    line-height: 11.48px;
    letter-spacing: 1.2857142686843872px;
    text-align: right;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  width: 375px;
`;
