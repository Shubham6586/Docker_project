import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>hello</h1>
    </>
  )
}

export default App
