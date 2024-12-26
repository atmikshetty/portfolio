import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import Experiences from "./components/Experience";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App(){
  return(
    <div>
      <Navbar />
      <Aboutme />
      <Skills />
      <Experiences />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App;