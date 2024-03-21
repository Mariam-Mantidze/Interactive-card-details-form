import styled from "styled-components";

export default function Form() {
  return (
    <FormComponent>
      <div className="label-input">
        <label htmlFor="">Cardholder Name</label>
        <Input placeholder="e.g. John Doe" type="text" />
      </div>

      <div className="label-input">
        <label htmlFor="">Card Number</label>
        <Input placeholder="e.g. 1234 5678 9123" type="number" />
      </div>

      <div className="flex-container">
        <div>
          <label htmlFor="">Exp. Date (MM/DD)</label>
          <div className="date-container">
            <Input className="date" placeholder="MM" type="number" />
            <Input className="date" placeholder="YY" type="number" />
          </div>
        </div>

        <div className="cvc">
          <label htmlFor="">CVC</label>
          <Input placeholder="e.g. 123" type="number" />
        </div>
      </div>

      <button className="confirm" type="submit">
        Confirm
      </button>
    </FormComponent>
  );
}

const FormComponent = styled.form`
  margin-top: 110px;
  padding: 0 24px 45px;
  color: rgba(33, 9, 47, 1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  & label {
    font-size: 12px;
    font-weight: 500;
    line-height: 15.31px;
    letter-spacing: 2px;
    text-align: left;
  }

  & .label-input {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  & .flex-container {
    display: flex;
    gap: 11px;
    align-items: baseline;
  }

  & .date-container {
    display: flex;
    gap: 8px;
    margin-top: 9px;
  }

  & .date {
    width: 72px;
  }

  .cvc {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  & .cvc input {
    width: 164px;
  }

  & .confirm {
    background: rgba(33, 9, 47, 1);
    border: none;
    padding: 15px;
    border-radius: 8px;
    color: rgba(255, 255, 255, 1);

    font-size: 18px;
    font-weight: 500;
    line-height: 22.97px;
  }
`;

const Input = styled.input`
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid rgba(223, 222, 224, 1);
  width: 327px;

  &::placeholder {
    color: rgba(33, 9, 47, 1);
    opacity: 0.25;
  }
`;
