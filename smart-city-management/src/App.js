import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/header';
import SignUp from './components/SignUp/signup';
import Login from './components/Login/login';
import AddPlace from './components/AddTouristplace/AddPlace';
import Weather from './components/Weather/Weather';
import News from './components/News/news';

import TouristDestination from './components/TouristDestinations/TouristDestination';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<><Header /><SignUp /></>} />
        <Route path='/Login' element={<><Header /><Login /></>} />
        <Route path='/AddPlace' element={<><Header /><AddPlace/></>} />
        <Route path='/weather' element={<><Header /><Weather/></>} />
        <Route path='/News' element={<><Header /><News/></>} />
        <Route path='/TouristDestination' element={<><Header /><TouristDestination/></>} />
      </Routes>
    </BrowserRouter>
  </div>);
}
export default App;