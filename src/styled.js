import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0;
    background-color: teal;
    width: 100vw;
    height: 30px;
    
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: white;
    font-weight: 700;
  }
   
`;