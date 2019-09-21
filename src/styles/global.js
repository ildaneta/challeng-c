import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

body {
  background: #fff;
  text-rendering: optimizeLegibility !important;
  -webkit-font-somoothing: antialiased !important;
  font-family: 'Abel', 'Lato', Arial, Helvetica, sans-serif;
}

input,
button {
  outline: 0;
}

header#main-header {
  height: 68px;
  background: #116193;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(107, 106, 106, 0.25);
}

header#main-header .content {
  display: flex;
  align-items: center;
  height: 100px;
}

header div p {
  font-family: "Abel", sans-serif;
  color: #48eff8;
  font-size: 35px;
}
`;
