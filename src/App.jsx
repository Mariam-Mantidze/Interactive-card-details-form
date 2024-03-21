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
      <Main> {submit ? <Success /> : <Form />}</Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
