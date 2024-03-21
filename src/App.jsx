import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Form from "./components/Form";
import Success from "./components/Success";
import Card from "./components/Card";

import { GlobalStyle } from "../styles/GlobalStyles";

function App() {
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Card />
      {submit ? <Success /> : <Form />}
    </>
  );
}

export default App;
