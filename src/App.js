import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Header, Main, Footer, Layout } from './components';
import HomePage from './pages/HomePage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import NotFoundPage from './pages/NotFoundPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header twClasses={'bg-gray-200'} />
          <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/page-one" element={<PageOne />} />
              <Route path="/page-two" element={<PageTwo />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Main>
          <Footer twClasses={'bg-gray-200'} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
