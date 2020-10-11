import React from "react";
import styled from "styled-components";

const UiButton = ({ large, children }) => {
  // Чтобы не передавать в дальнейшем все пропсы по отдельности. Принимай ...props и так же прокидывай в <Wrapper {...props}></Wrapper> 
  return <Wrapper large={large}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  padding: ${(p) => (p.large ? "12px 24px" : "12px 15px")};
  background-color: #7761ff;
  border-radius: 5px;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;

  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;

  &:hover,
  &:active,
  &:focus {
    background-color: #5849b8;
  }
`;

export default UiButton;
