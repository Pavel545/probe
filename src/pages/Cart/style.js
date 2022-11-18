import styled from "styled-components";

export const Gallery = styled.div`
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  background: #0c0c04;
  min-height: 600px;
`;
export const Text = styled.div`
  color: #ffffff;
  font-size: 150px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 90px;
  }
`;
