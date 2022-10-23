import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Base from './components/layouts/Base';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Community from './pages/Community';
import About from './pages/About';
import Blog from './pages/Blog';
import Build from './pages/Build';
import Contact from './pages/Contact';



function App() {
  AOS.init();
  return (
    <>
     <Router>
    <Base>
    <Routes>
      <Route index path='/' element={ <Home/>} ></Route>
      <Route  path='/technology' element={ <Technology/> } ></Route>
      <Route  path='/community' element={ <Community/>} ></Route>
      <Route  path='/about' element={ <About/>} ></Route>
      <Route  path='/blog' element={ <Blog/>} ></Route>
      <Route  path='/build' element={ <Build/>} ></Route>
      <Route  path='/contact' element={ <Contact/>} ></Route>
    </Routes>
    </Base>
    </Router>
    
    </>
  );
}

export default App;
