import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactInputMask from "react-input-mask";

// import { useState } from "react";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should have at least 3 characters")
    .max(30, "Name should have max. 30 characters")
    .test("space check", "Both name and surname required", (value) =>
      value.includes(" ")
    ),
  cardNumber: yup
    .string()
    .required("Card number is required")
    .min(19, "Min. 16 symbols are required"),
  month: yup
    .string()
    .required("Can't be blank")
    .test(
      "month validation",
      "Invalid value",
      (value) => parseInt(value) > 0 && parseInt(value) <= 12
    ),
  year: yup
    .string()
    .required("Can't be blank")
    .test("year validation", "Invalid value", (value) => parseInt(value) > 24),
  cvc: yup.string().required("CVC is required"),
});

export default function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  return (
    <div>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <div className="label-input">
          <label htmlFor="name">Cardholder Name</label>
          <Input
            {...register("name")}
            // maxLength={20}
            // errors={errors.name}
            // onChange={handleChange}
            id="name"
            placeholder="e.g. John Doe"
            type="text"
          />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className="label-input">
          <label htmlFor="cardNumber">Card Number</label>
          <ReactInputMask
            {...register("cardNumber")}
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123"
            type="text"
            mask="9999 9999 9999 9999"
            maskChar=""
          />

          {errors.cardNumber && (
            <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>
          )}
        </div>

        <div className="flex-container">
          <div className="date-flex">
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <div className="date-container">
              <ReactInputMask
                {...register("month")}
                id="month"
                className="date"
                placeholder="MM"
                type="text"
                mask="99"
                maskChar=""
              />

              <ReactInputMask
                {...register("year")}
                id="year"
                className="date"
                placeholder="YY"
                type="text"
                mask="99"
                maskChar=""
              />
            </div>

            {errors.year || errors.month ? (
              <ErrorMessage>{errors.month?.message}</ErrorMessage>
            ) : null}
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <ReactInputMask
              {...register("cvc")}
              id="cvc"
              placeholder="e.g. 123"
              type="text"
              mask="999"
              maskChar=""
            />
            {errors.cvc && <ErrorMessage>{errors.cvc.message}</ErrorMessage>}
          </div>
        </div>

        <button className="confirm" type="submit">
          Confirm
        </button>
      </FormComponent>
    </div>
  );
}

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
    gap: 26px;
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

    @media (min-width: 1000px) {
      gap: 20px;
    }
  }

  & .date-container {
    display: flex;
    gap: 8px;

    @media (min-width: 1000px) {
      gap: 10px;
    }
  }
  & .date-flex {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  & .date {
    width: 80px;
  }

  .cvc {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  & .cvc input {
    width: 164px;

    @media (min-width: 1000px) {
      width: 191px;
    }
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
    margin-top: 8px;

    @media (min-width: 1000px) {
      width: 191px;
      margin-top: 16px;
    }
  }
`;

const Input = styled.input`
  padding: 11px 16px;
  border-radius: 8px;
  border: 1px solid rgba(223, 222, 224, 1);
  width: 327px;
  cursor: pointer;
  color: rgba(33, 9, 47, 1);

  @media (min-width: 1000px) {
    width: 381px;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  &:hover {
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

  @media (min-width: 1000px) {
    font-size: 12px;
  }
`;
