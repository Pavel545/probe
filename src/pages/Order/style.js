import styled from "styled-components";

export const Box = styled.div`
  min-height: 750px;
  background: #0c0c04;
  padding-top: 30px;
  @media (max-width: 480px) {
    min-height: 533px;
  }
  
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 100px;
  background: #0c0c04;
  padding-top: 30px;
  gap:10px;
`;
export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 20px;
  width: 282px;
  height: 38px;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  @media (max-width: 480px) {
    width: 69px;
    height: 43px;
  }
`;
