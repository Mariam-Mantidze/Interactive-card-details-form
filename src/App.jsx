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
  const [success, setSuccess] = useState("");

  const [values, setValues] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setValues({ ...values, [id]: value });
  };

  const validation = () => {
    let errors = {};
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
          <Form {...values} handleChange={handleChange} setSubmit={setSubmit} />
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
