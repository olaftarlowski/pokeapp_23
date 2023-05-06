import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  // ErrorPage,
  Sidebar
} from './components'
import Home from './pages/Home';
import './App.css'
import Header from "./section/Header";


const App = () => {

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <p>DUPXO</p>
    </>
  )
}

export default App
