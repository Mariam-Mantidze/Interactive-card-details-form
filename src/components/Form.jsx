import styled from "styled-components";
import { useState } from "react";

export default function Form({ handleChange, onSubmit, errors, ...values }) {
  return (
    <div>
      <FormComponent>
        <div className="label-input">
          <label htmlFor="name">Cardholder Name</label>
          <Input
            maxLength={20}
            errors={errors.name}
            onChange={handleChange}
            id="name"
            placeholder="e.g. John Doe"
            type="text"
          />

          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </div>

        <div className="label-input">
          <label htmlFor="card-number">Card Number</label>
          <Input
            value={values.cardNumber}
            maxLength={19}
            errors={errors.cardNumber}
            onChange={handleChange}
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123"
            type="text"
          />

          {errors.cardNumber && (
            <ErrorMessage>{errors.cardNumber}</ErrorMessage>
          )}
        </div>

        <div className="flex-container">
          <div className="date-flex">
            <label htmlFor="date">Exp. Date (MM/YY)</label>
            <div className="date-container">
              <Input
                maxLength={2}
                errors={errors.month}
                onChange={handleChange}
                id="month"
                className="date"
                placeholder="MM"
                type="text"
                value={values.month}
              />

              <Input
                maxLength={2}
                errors={errors.year}
                onChange={handleChange}
                value={values.year}
                id="year"
                className="date"
                placeholder="YY"
                type="text"
              />
            </div>
            {errors.month && <ErrorMessage>{errors.month}</ErrorMessage>}
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <Input
              maxLength={3}
              errors={errors.cvc}
              onChange={handleChange}
              id="cvc"
              placeholder="e.g. 123"
              type="text"
            />

            {errors.cvc && <ErrorMessage>{errors.cvc}</ErrorMessage>}
          </div>
        </div>

        <button onClick={onSubmit} className="confirm" type="submit">
          Confirm
        </button>
      </FormComponent>
    </div>
  );
}

const FormParentContainer = styled.div`
  display:flex;
  align-items
`;

const FormComponent = styled.form`
  margin-top: 110px;
  padding: 0 24px 45px;
  color: rgba(33, 9, 47, 1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1000px) {
    margin-top: 0;
    padding: 0;
    /* margin-left: 127px; */
  }

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
  }
  & .date-flex {
    display: flex;
    flex-direction: column;
    gap: 9px;
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

const ErrorMessage = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 15.31px;
  text-align: left;
  color: rgba(255, 80, 80, 1);
`;
