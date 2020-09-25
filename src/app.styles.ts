import styled, { createGlobalStyle } from "styled-components";
import BackGroundImage from "./images/manhattan.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${BackGroundImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #ffffff;
  }

  .score {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Faster One", cursive;
    color: #EEE8AA ; 
    /* background-image: linear-gradient(180deg, #ffffff, #9198e5);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transperent;
    -moz-background-clip: text;
    -moz-text-text-fill-color: transperant; */
    filter: drop-shadow(2px 2px orange);
    font-size: 6rem;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, orange, #EEE8AA);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
