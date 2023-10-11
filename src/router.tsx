import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
