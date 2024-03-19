import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Form from "./components/Form/Form";
import Success from "./components/Success";

import { GlobalStyle } from "../styles/GlobalStyles";

function App() {
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <GlobalStyle />
      {submit ? <Success /> : <Form />}
    </>
  );
}

export default App;
