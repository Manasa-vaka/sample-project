import "./App.css";
//import { BrowserRouter, Route, switch} from "react-router-dom";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";

/*import Registration from "./pages/Registration";
import Placement from "./pages/Placements";
import Academics from "./pages/Academics";
import Home from "./pages/Home";
import Registration from "./component/Registration";
import Contact from "./component/Contact";
*/
function App() {
  return(
  
   <>
        <Header/>
        <Navbar/>
        <Content/>
        <Footer/>
    </>


  );
}

export default App;