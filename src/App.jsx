import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Form from "./components/Form";
import Success from "./components/Success";
import Card from "./components/Card";
import { GlobalStyle } from "../styles/GlobalStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    .min(2, "Min. 2 characters are required")
    .test(
      "month validation",
      "Invalid value",
      (value) => parseInt(value) > 0 && parseInt(value) <= 12
    ),
  year: yup
    .string()
    .required("Can't be blank")
    .min(2, "Min. 2 characters are required")
    .test(
      "year validation",
      "Invalid value",
      (value) => parseInt(value) >= 24 && parseInt(value) <= 40
    ),
  cvc: yup
    .string()
    .required("CVC is required")
    .min(3, "Min. 3 characters are required"),
});

function App() {
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const name = watch("name");
  const cardNumber = watch("cardNumber");
  const month = watch("month");
  const year = watch("year");
  const cvc = watch("cvc");

  const onSubmit = (data) => {
    setSubmit(true);
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Card
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      <Main>
        {" "}
        {submit ? (
          <Success setSubmit={setSubmit} />
        ) : (
          <Form
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
        )}
      </Main>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 349px;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 349px;
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;
