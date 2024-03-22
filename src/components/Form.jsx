import styled from "styled-components";
import { useState } from "react";

export default function Form({ handleChange, setSubmit }) {
  return (
    <FormComponent>
      <div className="label-input">
        <label htmlFor="name">Cardholder Name</label>
        <Input
          onChange={handleChange}
          id="name"
          placeholder="e.g. John Doe"
          type="text"
        />
      </div>

      <div className="label-input">
        <label htmlFor="card-number">Card Number</label>
        <Input
          onChange={handleChange}
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123"
          type="number"
        />
      </div>

      <div className="flex-container">
        <div>
          <label htmlFor="date">Exp. Date (MM/DD)</label>
          <div className="date-container">
            <Input
              onChange={handleChange}
              id="month"
              className="date"
              placeholder="MM"
              type="number"
            />
            <Input
              onChange={handleChange}
              id="year"
              className="date"
              placeholder="YY"
              type="number"
            />
          </div>
        </div>

        <div className="cvc">
          <label htmlFor="cvc">CVC</label>
          <Input
            onChange={handleChange}
            id="cvc"
            placeholder="e.g. 123"
            type="number"
          />
        </div>
      </div>

      <button onClick={() => setSubmit(true)} className="confirm" type="submit">
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
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid rgba(223, 222, 224, 1);
  width: 327px;
  cursor: pointer;
  color: rgba(33, 9, 47, 1);

  &::-webkit-inner-spin-button {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: #610595;
    /* border: 1px solid transparent; */
    /* border-image: linear-gradient(163.95deg, #6348fe 4.74%, #610595 88.83%) 1; */
  }

  &::placeholder {
    color: rgba(33, 9, 47, 1);
    opacity: 0.25;
  }
`;
