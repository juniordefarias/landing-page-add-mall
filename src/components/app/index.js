import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Home from '../Home';
import Categories from '../Categories';
import Action from '../Action';
import Footer from '../Footer';
import Support from '../Support';

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Home />
      <Support />
      <Categories />
      <Action />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
