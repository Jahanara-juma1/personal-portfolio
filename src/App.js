
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import Home from './components/Home';

import NotFound from './components/NotFound';

import Footer from './components/Details/Footer/Footer';
import Blogs from './components/Header/Blogs';
import About from './components/About/About';
import Projects from './components/About/Projects';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='About' element={<About></About>}></Route>
        <Route path='Projects' element={<Projects></Projects>}></Route>




        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
