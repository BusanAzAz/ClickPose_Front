import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import SelectModePage from './page/SelectModePage';
import TakePhotoPage from './page/TakePhotoPage';
import PersonalColorPage from './page/PersonalColorPage';
import SelectFramePage from './page/SelectFramePage';
import FinalPage from './page/FinalPage';
import SelectPersonPage from './page/SelectPersonPage';
import SelectCategoryPage from './page/SelectCategoryPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      <Route path='/select-mode' element={<SelectModePage />} />
      <Route path='/select-person' element={<SelectPersonPage />} />
      <Route path='/personal' element={<PersonalColorPage />} />
      <Route path='/photo' element={<TakePhotoPage />} />
        <Route path='/select-frame' element={<SelectFramePage />} />
        <Route path='/final' element={<FinalPage />} />
        <Route path='/category' element={<SelectCategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
