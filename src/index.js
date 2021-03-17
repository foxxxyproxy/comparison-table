import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./utils/theme";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    font-family: -apple-system, "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;

    color: ${(p) => p.theme.textColor};
    background: ${(p) => p.theme.pageBackground};

  }

  body{
    @media (max-width: 650px) {
      font-size: 0.8rem;
    }
  }
    
  ::before,
  ::after {
    box-sizing: inherit;
  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
