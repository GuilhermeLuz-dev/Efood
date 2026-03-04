import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';

const routes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/profile/:id" element={<Profile />}></Route>
  </Routes>
);

export default routes;
