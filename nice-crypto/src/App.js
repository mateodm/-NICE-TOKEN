import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/body';
import Footer from './components/footer';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import TokenomicsChart from './components/tokenomics';
function App() {
  return (
    <Router>
      <Header></Header>
      <Main></Main>
      <TokenomicsChart></TokenomicsChart>
      <Footer></Footer>
    </Router>
  );
}

export default App;
