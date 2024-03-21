import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body {
    font-family: "Space Grotesk", sans-serif;
    min-height: 100dvh;
    display: flex;
  flex-direction: column;
  overflow-x: hidden;




}

button {
    font-family: "Space Grotesk", sans-serif;
}

form, input {
    font-family: "Space Grotesk", sans-serif;
}
`;
