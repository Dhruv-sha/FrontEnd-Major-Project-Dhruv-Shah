import About from "./components/About";
import AddItems from "./components/AddItems";
import Contact from "./components/Contact";
import DisplayItems from "./components/DisplayItems";
import Home from "./components/home";
import UpdateItems from "./components/UpdateItems"
import Menu from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Menu/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<DisplayItems />} />
        <Route path="/add-items" element={<AddItems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update-item/:id" element={<UpdateItems />} />
      </Routes>
      <Footer/>

    </>
  )

}


export default App;