import './App.css';


// component::::

import { Nav } from "./component/nav";
import { Home } from "./component/home";
import { About } from "./component/about";
import { Skill } from "./component/skill";
import { Portfolio } from "./component/portfolio";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";
import { Sidebar } from "./component/sidebar";

function App() {
  return (
    <>
    <Nav></Nav>
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    <Sidebar></Sidebar>
    </>
  );
}

export default App;
