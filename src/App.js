import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Sobre from "./components/pages/Sobre"
import Contato from "./components/pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"
import Container from "./components/layout/Container";
 

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar /> 
        <Container customClass="min-height">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/sobre" element={<Sobre />}/>
              <Route path="/contato" element={<Contato />}/>
          </Routes>
        </Container>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
