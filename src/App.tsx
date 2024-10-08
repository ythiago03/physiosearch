import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skeleton from './pages/Skeleton/Skeleton';
import { ThemeProvider } from './components/Theme/theme-provider';
import Navbar from './components/Navbar/Navbar';
import Route1 from './pages/Route1/Route1';

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Skeleton />} />
          <Route path="knee" element={<Route1 />}/>
        </Routes>
      </Router>  
    </ThemeProvider>
  )
}

export default App
