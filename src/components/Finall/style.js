import styled from "styled-components";
export const Box = styled.div`
  min-height: 150px;
  background: #0c0c04;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  @media (max-width: 480px) {
    max-width: 427px;
    min-height: 250px;
  }
`;
export const Text = styled.div`
  color: #ffffff;
  font-size: 150px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 90px;
  }
`;
