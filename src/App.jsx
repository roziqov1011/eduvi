import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Subscribe from './components/Subscribe/Subscribe';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Shop from './pages/Shop/Shop';
import CoursesDetail from './pages/CoursesDetail/CoursesDetail';
import Price from './pages/Price/Price';
import Instructor from './pages/Instructor/Instructor';
import Mentors from './pages/Mentors/Mentors';
import MentorsDetail from './pages/MentorsDetail/MentorsDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/courses/:id' element={<CoursesDetail/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/instructor' element={<Instructor/>}/>
        <Route path='/mentors' element={<Mentors/>}/>
        <Route path='/mentors/:id' element={<MentorsDetail/>}/>
      </Routes>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
