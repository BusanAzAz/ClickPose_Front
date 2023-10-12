import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import SelectModePage from './page/SelectModePage';
import TakePhotoPage from './page/TakePhotoPage';
import PersonalColorPage from './page/PersonalColorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/select' element={<SelectModePage />} />
        <Route path='/personal' element={<PersonalColorPage />} />
        <Route path='/photo' element={<TakePhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
