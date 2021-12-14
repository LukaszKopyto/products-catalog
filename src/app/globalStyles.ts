import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Nunito', sans-serif; 
    }
    #root{
        margin:0 auto;
        background: #F0F1F5;
        height: 100vh;
    }
 `;
