import styled from "styled-components";

export const Main = styled.div`
  background: #0c0c04;
`;
export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding-left: 40px;
`;
export const SelectBox = styled.div`
  padding-top: 40px;
  display: flex;
  padding-left: 40px;
  background: #0c0c04;
  padding-bottom: 45px;
  min-height: 40px;
  align-content: center;
`;
export const Select = styled.select`
  width: 288px;
  height: 41px;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  border: 1px solid #c4c4c4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 20px;
  padding-left: 15px;
  background-image: url(img/arrow.png);
  background-repeat: no-repeat;
  background-position: right;
  padding-right: 25px;
  background: #d9bc2f;
`;
