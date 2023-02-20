import styled from "styled-components";

export const Div = styled.div`
@media(max-width: 500px) {
    justify-self: center
}
`;

export const Button = styled.button`

    border: none;
    color: hsl(180, 100%, 25%);
    background-color: transparent;
    font-size: 15px;
    margin-top: 3px;
    transition: 1s;
    cursor: pointer;

    @media(max-width: 500px) {
        display: grid;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }
    &:disabled {
        color: hsl(0, 0%, 80%);
    }
`;