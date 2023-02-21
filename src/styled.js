import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 0;
    background-color: teal;
    width: 100vw;
    height: 50px;
    padding-inline-start: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: white;
    font-weight: 700;
  }
   
`;

export const Wrapper = styled.div`
  flex-basis: 900px;
`;