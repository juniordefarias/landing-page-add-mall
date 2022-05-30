import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-height: 4.25rem;

    /* Cores */
    --first-color: #F8283E;
    /* --first-color-alt: ; */
    --text-color: #7B7B7E;
    --container-color: #F6F5FC;

    /* Font Size */
    --body-font: 'Inter', sans-serif;
    --biggest-font-size: 2.5rem;
    --h1-font-size: /* 2.25rem */ 2rem;
    --h2-font-size: 1.5rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .6875rem;

    /* Font Weight */
    --font-regular: 400;
    --font-semi-bold: 600;
    --font-bold: 700;
  }

  @media screen and (min-width: 500px) {
    :root{
      --small-font-size: 1rem;
      --smaller-font-size: .875rem;
    }
  }

  @media screen and (min-width: 906px) {
    :root{
    --biggest-font-size: 3.5rem;
    --h1-font-size: 3rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1.25rem;
    }
  }

  *,::before,::after{
    box-sizing: border-box;
    margin: 0;
  }
  
  body {
    padding: var(--header-height) 0 0 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background: linear-gradient(to bottom, #F8283E 32%, rgba(40, 50, 248, 0.9) 95.66%) fixed;
    background-attachment: fixed;
    /* background-size: auto 120vh; */
    appearance: none;
  }

  h1, h2, h3, p, ul {
    margin: 0;
  }

  p {
    line-height: 1.4;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  

/*     @media screen and (max-height: 668px) {
      body {
        background-size: auto 130vh;
      }
    }

    @media screen and (max-height: 580px) {
      body {
        background-size: auto 150vh;
      }
    } */

    /* fixind gradient to iOS devices */

    @media screen and (max-width: 500px) {
      body {
        background-size: auto 120vh;
      }
    }

    @media screen and (max-width: 415px) {
      body {
        background-size: auto 140vh;
      }
    }

    @media screen and (max-width: 377px) {
      body {
        background-size: auto 150vh;
      }
    }

    @media screen and (max-width: 325px) {
      body {
        background-size: auto 150vh;
      }
    }
`;
