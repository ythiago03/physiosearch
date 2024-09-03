import Home from "./pages/Home/Home";
import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Joelho from "./pages/Joelho/Joelho";

function App() {


  return (
     <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/rota1" element={<Joelho />} />
     </Routes>
   </Router>
  )
}

export default App
