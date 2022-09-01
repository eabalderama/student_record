import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Edit from './views/Edit'
import Providers from './Providers';
import Add from './views/Add';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
            <Route path='/' >
              <Route index element={<Home />} />
              <Route path='edit/:id' element={<Edit />} />
              <Route path='add' element={<Add />} />
            </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#fff',
          backgroundColor: '#571eb1',
          fontFamily: '"Montserrat", sans-serif',
        },
      }} />
    </Providers>
  );
}

export default App;
