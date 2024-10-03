import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Joelho from './pages/Joelho/Joelho';
import Skeleton from './pages/Skeleton/Skeleton';
import { ThemeProvider } from './components/Theme/theme-provider';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Skeleton />} />
        </Routes>
      </Router>  
    </ThemeProvider>
  )
}

export default App
