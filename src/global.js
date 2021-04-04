import { createGlobalStyle } from 'styled-components'
import FontURLBlack from './fonts/Nunito-Black.ttf';
import FontURLBold from './fonts/Nunito-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: 'Nunito';
      src: url(${FontURLBlack}) format('truetype');
      font-style: normal;
      font-display: auto;
    }

    @font-face {
      font-family: 'Nunito Bold';
      src: url(${FontURLBold}) format('truetype');
      font-style: normal;
      font-display: auto;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        overflow-x: hidden;
        box-sizing: border-box;
    }

`