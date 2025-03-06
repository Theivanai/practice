//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./Redux Pages/Home";
import CourseDetails from "./Redux Pages/CourseDetails";
import Playlist from "./Redux Pages/Playlist";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlaylistDetails from "./Redux Pages/PlaylistDetails";

//import EfficientAPIcall from './Hooks/Usecallback/EfficientAPIcall';
//import Stableclickhandlers from './Hooks/Usecallback/Stableclickhandlers';
//import Totalprice from './Hooks/Usememo/Totalprice';
//import Listfiltering from './Hooks/Usememo/Listfiltering';
//import Simplecontext from './Hooks/Usecontext/Simplecontext';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h3 className="mt-1">Redux</h3>
          <nav>
            <Link className="nav-link" to='/'>Home</Link>
            {/* <Link className="nav-link" to='/course'>CourseDetails</Link> */}
            <Link className="nav-link" to='/playlist'>Playlist</Link>
            {/* <Link className="nav-link" to='/playlistdetails'>PlaylistDetails</Link> */}
          </nav>
        </header>
        <div className="common">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<CourseDetails />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/playlistdetails' element={<PlaylistDetails />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2025 copyrights reserved</p>
        </footer>
      </BrowserRouter>



      


      {/* <h3>Usememo task1</h3>
      <Totalprice/>

      <h3>Usememo task2</h3>
      <Listfiltering/> */}

      {/* <h3>Usecontext task1</h3>
      <Simplecontext/> */}


      {/* <h3>Usecallback task1</h3>
      <EfficientAPIcall/>

      <h3>Usecallback task2</h3>
      <Stableclickhandlers/> */}
    </div>
  );
}

export default App;
