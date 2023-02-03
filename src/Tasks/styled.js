import styled, { css } from "styled-components";

export const ListUl = styled.ul`
    padding-left: 0px;
`;

export const ItemLi = styled.li`
    display: flex;
    justify-content: stretch;
    border-bottom: 1px solid hsl(249, 46%, 55%);
    line-height: 2.5;

    ${({ hidden }) => hidden && css`
    display: none;
    `};
`;

export const TaskText = styled.span`
    flex-grow: 1;
    inline-size: 100px;
    overflow-wrap: break-word;

    ${({ underlined }) => underlined && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: hsl(0, 0%, 100%);
    margin-left: 5px;
    height: 30px;
    width: 30px;
    padding: 0;
    margin-top: 5px;
    transition: 1s;

    ${({ birdie }) => birdie && css`
        background-color: hsl(120, 100%, 25%);
        margin-right: 5px;
        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
    `
    }

    ${({remove}) => remove && css`
        background-color: hsl(348, 83%, 47%);
        margin-left: 5px;
    &:hover {
        background-color: hsl(348, 83%, 70%);
    }
    `
    }
`;

export const Div = styled.div`
    padding: 20px;
    margin: 1px 0px;
    list-style-type: none;
`;