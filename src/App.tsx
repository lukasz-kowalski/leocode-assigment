import { ThemeProvider } from 'styled-components';
import { UsersList } from 'pages';
import { Layout } from 'components';
import theme from 'config/styles/theme';
import 'config/styles/styles.css';

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <Layout>
        <UsersList />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
