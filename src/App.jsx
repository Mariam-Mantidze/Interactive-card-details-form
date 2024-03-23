import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Form from "./components/Form";
import Success from "./components/Success";
import Card from "./components/Card";

import { GlobalStyle } from "../styles/GlobalStyles";

function App() {
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  // const [success, setSuccess] = useState("");

  const [values, setValues] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "cardNumber") {
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length <= 16) {
        const formattedValue = onlyDigits.replace(/(.{4})/g, "$1 ").trim();
        setValues({ ...values, [id]: formattedValue });
      }
    } else {
      setValues({ ...values, [id]: value });
    }

    // =================== NOT WORKING. INVESTIGATE =========================
    // if (id === "month" || id === "year") {
    //   const onlyDigits = value.replace(/\D/g, "");
    //   setValues({ ...values, [id]: onlyDigits });
    // }
  };

  const validation = () => {
    let errors = {};

    // name validation
    if (!values.name.trim()) {
      errors.name = "Can't be blank";
    } else if (!isNaN(values.name)) {
      errors.name = "Wrong format, can't be number";
    }

    // card number validation
    if (!values.cardNumber.trim()) {
      errors.cardNumber = "Can't be blank";
    } else if (/\D/.test(values.cardNumber.replace(/\s/g, ""))) {
      errors.cardNumber = "Wrong format, numbers only";
    } else if (values.cardNumber.replace(/\s/g, "").length !== 16) {
      errors.cardNumber = "Card number should be 16 digits long";
    }

    // date validation
    if (!values.month.trim() || !values.year.trim()) {
      errors.month = "Can't be blank";
    } else if (
      /\D/.test(values.month.replace(/\s/g, "")) ||
      /\D/.test(values.year.replace(/\s/g, ""))
    ) {
      errors.month = "Wrong format, numbers only";
    } else if (values.month.replace(/\s/g, "").length !== 2) {
      errors.month = "Date should be 2 numbers";
    }

    // cvc validation
    if (!values.cvc.trim()) {
      errors.cvc = "Can't be blank";
    } else if (/\D/.test(values.cvc.replace(/\s/g, ""))) {
      errors.cvc = "Wrong format, numbers only";
    } else if (values.cvc.replace(/\s/g, "").length !== 3) {
      errors.cvc = "CVC should be 3 numbers";
    }

    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmit(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Card {...values} />
      <Main>
        {" "}
        {submit ? (
          <Success />
        ) : (
          <Form
            {...values}
            handleChange={handleChange}
            onSubmit={onSubmit}
            errors={errors}
          />
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
