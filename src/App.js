import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Product from "./components/Product";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Features from "./components/Features";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>;

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Product/>
      <Contact/>
      
    </div>
  );
};

export default App;
