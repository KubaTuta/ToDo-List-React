const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        margin: 0;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: hsl(0, 13%, 89%);
        display: flex;
    }
`;