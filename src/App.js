import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Base from './components/layouts/Base';
import Home from './pages/Home';


function App() {
  AOS.init();
  return (
    <>
     <Router>
    <Base>
    <Routes>
      <Route index path='/' element={ <Home/>} ></Route>
      
    </Routes>
    </Base>
    </Router>
    
    </>
  );
}

export default App;
