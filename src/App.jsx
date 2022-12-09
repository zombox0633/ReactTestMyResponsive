import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Content/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
