import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    padding: 10px;

    @media(max-width) {
        grid-template-columns: auto;
    }
`;

export const Input = styled.input`
    display: block;
    height: 30px;
`;

export const Button = styled.button`
    color: hsl(0, 0%, 100%);
    background-color: hsl(180, 100%, 25%);
    border: none;
    transition: 1s;
    height: 30px;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
    }
`;