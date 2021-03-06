import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0 !important;
        padding: 0 !important;
    }
    *{
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        font-family: 'Roboto'  sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`