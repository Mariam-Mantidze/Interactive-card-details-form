import styled from "styled-components";
import CheckMark from "/images/icon-complete.svg";

export default function Success() {
  return (
    <SuccessContainer>
      <img className="check-mark" src={CheckMark} alt="check-mark" />
      <h2 className="thank-you">THANK YOU!</h2>
      <p className="success-text">We’ve added your card details</p>
      <button className="continue-btn">Continue</button>
    </SuccessContainer>
  );
}

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 91px;
  align-items: center;
  padding: 0px 24px 0 24px;

  & .thank-you {
    font-size: 28px;
    line-height: 35.73px;
    letter-spacing: 3.422222137451172px;
    color: rgba(33, 9, 47, 1);
    margin-top: 35px;
  }

  & .success-text {
    font-size: 18px;
    line-height: 22.97px;
    color: rgba(143, 134, 148, 1);
    margin-top: 16px;
  }

  & .continue-btn {
    background: rgba(33, 9, 47, 1);
    border: none;
    border-radius: 10px;
    padding: 15px;
    font-size: 18px;
    width: 100%;
    margin-top: 48px;
    width: 327px;

    color: rgba(255, 255, 255, 1);
  }
`;
