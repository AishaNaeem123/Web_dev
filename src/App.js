import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import Page404 from './Components/Home/Home';



function App() 
{
  return (
    <BrowserRouter>
      <section className="hero-section">
        <Routes>
          <Route path='/' exact element={<Home/>} /> 
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App;
