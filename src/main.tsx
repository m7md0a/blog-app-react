import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from './pages/Loading/loading.page';
import AppLayout from './layouts/app.layout';
import DashboardLayout from './layouts/dashboard.layout';


const NotFoundPage = lazy(() => import('./pages/404/404'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <div id='modal-root'></div>
        <div>
          <Routes>
            <Route path="/*" element={<AppLayout />}/>
            <Route path="/dashboard/*" element={<DashboardLayout />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </div>
    </BrowserRouter>
  </Suspense>
);

