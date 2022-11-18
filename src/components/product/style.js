import styled from "styled-components";

export const Cell = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 178px;
  height: 368px;
  align-items: center;
  text-align: center;
  color: #0000000;
  background: #d9bc2f;
  justify-content: space-around;
  border-radius: 20px;
  &:hover {
    transition-duration: 0.8s;
    transform: scale(1.05);
    box-shadow: 0 0 5px #c4c4c4;
  }
  &_op {
    display: flex;
    gap: 16px;
  }
  @media (max-width: 480px) {
    width: 83px;
    height: 100px;
  padding: 8px;

  }
`;
export const Photo = styled.img`
  height: 75%;
  width: 50%;
  @media (max-width: 480px) {
    height: 50%;
    width: 20%;
  }
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  @media (max-width: 480px) {
    font-size: 10px;
    
  }
`;
export const Cell_op = styled.div`
  display: flex;
  gap: 16px;
`;
export const Text = styled.div`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 12px;
  max-height: 43px;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const Text_strength = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: rgb(140, 10, 10);
  @media (max-width: 480px) {
    display: none;
  }
`;
export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 20px;
  width: 200px;
  height: 30px;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  background: #ffffff;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const Car = styled.svg`
  display: none;
  
  @media (max-width: 480px) {
    height: 50%;
    width: 20%;
    display: block;
  }
`;
