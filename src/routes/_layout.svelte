<script>
  import smoothscroll from 'smoothscroll-polyfill';

  import Nav from '../components/Nav';
  import Footer from '../blocks/Footer';

  const setup = () => {
    smoothscroll.polyfill();
  };
</script>

<svelte:head
  ><style>
    /**
    https://coolors.co/ffe072-40a6e2-000000-ffffff
    */

    @import 'reset.css';

    :root {
      /** brand colors */
      --primary: #ffe072;
      --secondary: #40a6e2;
      --tertiary: #463d54;

      /** context colors*/
      --background-light: #fff;
      --background-dark: #111;
      --text-dark: #fff;
      --text-light: #333;

      /** fonts */
      --baseFontSize: 16px;
      --bold: 700;
      --regular: 400;
      --font-stack: bilo, sans-serif, ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

      --font-mono: 'Courier New', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial;

      /* misc */
      --sideMargin: 2rem;
      --max-width: 1460px;
      --max-width--article: 680px;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      background-repeat: no-repeat;
    }

    html {
      font-size: var(--baseFontSize);
      font-weight: var(--regular);
      font-display: swap;
      font-style: normal;
    }

    body {
      min-width: 280px; /* if you're below this you're better off scrolling */
      font-family: var(--font-stack);
      font-size: 1.125rem; /* 18px standard*/
      line-height: 1.4;
      color: var(--text-light);
      background: var(--background-light);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    button {
      color: inherit;
      cursor: pointer;
      background: none;
      border: none;
    }
    button:focus {
      outline: none;
    }

    strong {
      font-weight: var(--bold);
    }

    h2 {
      font-weight: var(--bold);
      font-size: 2rem;
    }
  </style></svelte:head
>

<Nav />

<main>
  <slot />
</main>
<Footer />

<svelte:window on:load={setup} />
