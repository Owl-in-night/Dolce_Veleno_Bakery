import Navbar from "./components/_partials/Navbar";
import Footer from "./components/_partials/Footer";
import { useState } from "react";
import Navegation from "./components/routes/Navegation";

function App(){
  
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
    <Navbar  Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
    
    <Navegation/>
    
    <Footer/>
    </div>
   ) 
}
export default App