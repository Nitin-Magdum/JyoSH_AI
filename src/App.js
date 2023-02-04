import "./App.css";
import NavBar from "./Componants/NavBar/NavBar";
import Home from "./Componants/Home/Home";
import Footer from "./Componants/Footer/Footer.tsx"; 
function App() {
  return (
    <div>
      <NavBar  />
        <Home />
        <Footer/>
    </div>
  );
}

export default App;
