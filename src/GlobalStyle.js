const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        justify-content: center;
        align-items: center;
        background-color: hsl(0, 13%, 89%);
        padding: 20px;
        margin: 50px auto;
        max-width: 900px;
    }
`;