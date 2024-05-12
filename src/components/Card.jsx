import styled from "styled-components";
import FrontCard from "/images/bg-card-front.png";
import BackCard from "/images/bg-card-back.png";
import MobileBackground from "/images/bg-main-mobile.png";
import DesktopBackground from "/images/bg-main-desktop.png";

export default function Card({ name, cardNumber, month, year, cvc }) {
  return (
    <CardBox>
      <CardContainer>
        <FrontCardContainer>
          <div className="circles">
            <div className="circle"></div>
            <div className="small-circle"></div>
          </div>

          <span className="numbers">{cardNumber || "0000 0000 0000 0000"}</span>

          <div className="name-date">
            <span className="name">{name || "JANE APPLESEED"}</span>

            {month ? (
              <span className="date">
                {`${month}/`}
                <span className="date">{year}</span>
              </span>
            ) : (
              <span className="date">
                00/
                <span className="date">00</span>
              </span>
            )}
          </div>
        </FrontCardContainer>

        <BackContainer>
          {cvc ? (
            <span className="cvc">{cvc}</span>
          ) : (
            <span className="cvc">000</span>
          )}
        </BackContainer>
      </CardContainer>
    </CardBox>
  );
}

const CardBox = styled.div`
  background-image: url(${MobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: rgba(255, 255, 255, 1);
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    height: unset;
    background-image: url(${DesktopBackground});
    height: 100vh;
    min-width: 483px;
  }
`;

const FrontCardContainer = styled.div`
  background-image: url(${FrontCard});
  background-size: cover;
  width: 285px;
  height: 156.21px;
  padding: 17px 20px 19.6px 19px;
  top: 5px;
  left: 16px;
  z-index: 2;
  box-shadow: 0px 39px 60px 0px rgba(0, 0, 0, 0.14);
  position: absolute;

  @media (min-width: 1000px) {
    width: 447px;
    height: 245px;
    margin-left: 164px;
    position: initial;
    padding: 28px 31px 26.5px 32px;
  }
  & .circles {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 1000px) {
      gap: 15px;
    }
  }

  & .circle {
    width: 30.19px;
    height: 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;

    @media (min-width: 1000px) {
      width: 46.96px;
      height: 47px;
    }
  }

  .small-circle {
    width: 13px;
    height: 13px;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 50%;

    @media (min-width: 1000px) {
      width: 21px;
      height: 21px;
    }
  }

  & .numbers {
    font-size: 18px;
    line-height: 22.97px;
    letter-spacing: 2.200000047683716px;
    text-align: left;
    display: inline-block;
    margin-top: 37px;

    @media (min-width: 1000px) {
      font-size: 28px;
      margin-top: 64px;
    }
  }

  & .name-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 17px;

    @media (min-width: 1000px) {
      margin-top: 41.5px;
    }
  }

  & .name {
    font-size: 9px;
    line-height: 11.48px;
    letter-spacing: 1.2857142686843872px;
    text-align: left;

    @media (min-width: 1000px) {
      font-size: 14px;
    }
  }

  & .date {
    font-size: 9px;
    line-height: 11.48px;
    letter-spacing: 1.2857142686843872px;
    text-align: right;

    @media (min-width: 1000px) {
      font-size: 14px;
    }
  }
`;

const BackContainer = styled.div`
  background-image: url(${BackCard});
  background-size: cover;
  width: 285px;
  height: 156.21px;
  z-index: 1;
  top: -94px;
  right: 16px;
  position: absolute;
  padding: 65px 0 0px 231px;

  @media (min-width: 1000px) {
    width: 447px;
    height: 245px;
    margin-left: 257px;
    position: initial;
    margin-top: 60px;
    padding: 107px 0 0px 363px;
  }

  & .cvc {
    font-size: 9px;
    font-weight: 500;
    line-height: 11.48px;
    letter-spacing: 1.2857142686843872px;
    text-align: right;

    @media (min-width: 1000px) {
      font-size: 14px;
    }
  }
`;

const CardContainer = styled.div`
  position: absolute;
  width: 375px;

  @media (min-width: 1000px) {
    position: initial;
  }
`;
