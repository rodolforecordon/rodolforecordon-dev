import { Fragment } from 'react';
import NavBar from './components/NavBar';
import PageContent from './components/PageContent';

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <PageContent />
      </main>
    </Fragment>
  );
}

export default App;
