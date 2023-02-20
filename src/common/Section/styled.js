import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: hsl(0, 0%, 100%);
    margin: 1px 0px 10px;
    padding: 10px;
   
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
  margin: 1px 0px;
  border-bottom: 1px solid hsl(0, 0%, 87%);

  @media(max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const H3 = styled.h2`
    margin: 0;
`;