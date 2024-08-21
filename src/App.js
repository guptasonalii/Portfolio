import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
  
    <BrowserRouter>
    <Header/>
    <Routes>    
       <Route path="/" element={<About />} />
       <Route path="/skills" element={<Skills/>}/>
       <Route path="/experience" element={<Experience/>}/>
       <Route path="/contact" element={<Contact/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
