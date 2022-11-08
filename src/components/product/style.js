import styled from "styled-components";

export const Cell = styled.div`
  padding: 10px;
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
`;
export const Photo = styled.img`
  height: 75%;
  width: 50%;
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: normal;
`;
export const Cell_op = styled.div`
  display: flex;
  gap: 16px;
`;
export const Text = styled.div`
  font-size: 14px;
  line-height: 17px;
  
  margin-bottom: 12px;
`;
export const Text_strength = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: rgb(140, 10, 10);
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
  
`;
