import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  gap: 20px;
  padding-left: 27px;
  padding-right: 27px;
  padding-top: 42px;
  background: #f7f6f6;
  height: 556px;
  border-radius: 20px;
  grid-column: span 4;
  max-width: 360px;
  @media (max-width: 480px) {
    width: 207px;
    height: 405px; 
  }
`;
export const Buttons = styled.button`
  box-sizing: border-box;
  border-radius: 20px;
  width: 282px;
  height: 38px;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  @media (max-width: 480px) {
    width: 164px;
  }
`;
export const Input = styled.input`
  padding-left: 15px;
  padding-right: 15px;
  width: 288px;
  font-size: 14px;
  line-height: 17px;
  border: none;
  color: #000000;
  border-bottom: 1px solid #cacdd8;
  background: #f7f6f6;
  padding-top: 40px;
  @media (max-width: 480px) {
    width: 207px;
    
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
