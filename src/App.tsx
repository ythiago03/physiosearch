import Home from "./pages/Home/Home";
import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rota1 from "./pages/Rota1/Rota1";
import Rota2 from "./pages/Rota2/Rota2";

function App() {


  return (
     <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/rota1" element={<Rota1 />} />
       <Route path="/rota2" element={<Rota2 />} />
     </Routes>
   </Router>
  )
}

export default App
