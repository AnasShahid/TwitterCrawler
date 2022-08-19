import { createGlobalStyle } from "styled-components";

export const MainLayout = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%
    margin: 0 auto;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  .App {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
