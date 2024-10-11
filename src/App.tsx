import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skeleton from './pages/Skeleton/Skeleton';
import { ThemeProvider } from './components/Theme/theme-provider';
import Navbar from './components/Navbar/Navbar';
import Knee from './pages/Knee/Knee';
import Footer from './components/Footer/Footer';
import { Separator } from "@/components/ui/separator";

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Skeleton />} />
          <Route path="knee" element={<Knee />}/>
        </Routes>
        <Separator/>
        <Footer/>
      </Router>  
    </ThemeProvider>
  )
}

export default App
