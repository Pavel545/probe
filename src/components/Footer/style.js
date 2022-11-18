import styled from "styled-components";
export const Footer = styled.div`
  padding: 51px;

  min-height: 150px;
  display: flex;
  justify-content: space-between;
  background: #1e201e;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 23px;
    align-items: center;
    max-width: 418px;
  }
`;
export const Logo = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/logo.jpg"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width: 480px) {
    
  }
`;

export const Сontacts = styled.div`
  width: 266px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 12px;

  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media (max-width: 480px) {
    align-items: center;
  }
`;
export const СontactsElement = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #888888;
  text-decoration: none;
  :hover{
    text-decoration-line:underline ;
    text-decoration-color: aqua;
`;
export const СontactsSvg = styled.svg`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #888888;
  text-decoration: none;
  :hover {
    stroke: rgb(69, 174, 209);
    stroke-width: 10%;
  }
  :hover path {
    transition-duration: 0.8s;
    fill: #000000;
  }
`;
export const СontactsBox = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 32px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  
`;
