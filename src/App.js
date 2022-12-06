//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import DemoExample from './DemoExample'
//import Events from './Events'
//import './App.css'
//import JSX from './JSX'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return(
        <section>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
          {/*<StateExample/>
          <JSX/>
          <Events/>
          <FuncProps carname="rolls royce" year="1989"/>
          <DemoExample name="chinni" year="2003"/>
          <h1>hello</h1>
          <PropsExample name="chinni" age="19"/>
          <PropsExample name="different" age="telidhu"/>
          <p>this is intenship</p>
          <h1>Bye</h1>
          <img src="https://www.sailusfood.com/wp-content/uploads/2016/06/mango-falooda-recipe.jpg"width="15%" alt="falooda"/>
          <ClassComponent/>*/}
  </section>
 );
}
export default App;
