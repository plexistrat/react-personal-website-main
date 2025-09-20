import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NewProjects from "./components/NewProjects/NewProjects";
import Hero from "./components/Hero/Hero";

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar scrollTo={scrollTo} />
      <div className="App">
        <Hero />
      </div>
      <About scrollTo={scrollTo} />
      <NewProjects scrollTo={scrollTo} />
      <Contact scrollTo={scrollTo} />
      <Footer />
    </div>
  );
}

export default App;
