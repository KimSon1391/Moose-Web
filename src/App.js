import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Routes from 'Routes/Routes';
import ScrollToTop from 'utils/ScrollToTop';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
