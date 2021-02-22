import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header, main, footer {
    max-width: 1920px;
    margin: 0 auto;
  }

  /* Back Drop Blur */
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .backdrop-blur {
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    }
  }

`

export default GlobalStyles
