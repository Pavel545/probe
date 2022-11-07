import styled from "styled-components";

export const Cell = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 150px;
  height: 250px;
  align-items: center;
  text-align: center;
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
  font-size: 10px;
  line-height: 20px;
`;
export const Text_strength = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: rgb(140, 10, 10);
`;
