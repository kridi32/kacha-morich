
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Charts from './Components/Charts/Charts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/report' element={<Charts/>}/>
         <Route path='/*' element={<NotFound/>}/>
         <Route path='/reviews' element={<Reviews/>} />
       </Routes>
      <p>Copyright 2022 | Kachamorich dot com</p>
    </div>
  );
}

export default App;
