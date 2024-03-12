import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Servicos from "./pages/servicos";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/servicos" element={<Servicos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App