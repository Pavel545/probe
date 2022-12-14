import styled from "styled-components";
export const Headers = styled.div`
  padding: 115px;

  min-height: 150px;
  display: flex;
  justify-content: space-between;
  background-image: url("https://img.freepik.com/premium-photo/glasses-of-light-dark-and-wheat-beer-on-a-dark-background_237253-59.jpg?w=826");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 77px;
    min-height: 232px;
    max-width: 310px;
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
  
`;
export const BoxLink = styled.div`
  display: flex;
  gap: 10px;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
  align-content: flex-end;
  @media (max-width: 480px) {
    flex-direction: row;
    
  }
  
`;
export const Link = styled.a`
  font-size: 40px;
  text-decoration: none;
  font-style: normal;
  color: #ffffff;
  flex: none;
  margin-left: 32px;
  text-decoration: none;
  @media (max-width: 480px) {
    margin-left: 0px;
    font-size: 20px;
  }
`;
