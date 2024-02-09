import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import MainComponent from "./components/MainComponent";
import EmptyComponent from "./components/emptyComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailComponent from "./components/DetailComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark vh-100 ">
        <header>
          <NavbarComponent />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<EmptyComponent />} />
            <Route path="/:city" element={<MainComponent />} />
            <Route path="*" element={<EmptyComponent />} />
            <Route path="/detail/:cityID" element={<DetailComponent />} />
          </Routes>
        </main>
      </div>
      <footer className=" bg-dark">
        <FooterComponent />
      </footer>
    </BrowserRouter>
  );
}

export default App;
