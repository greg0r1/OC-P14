import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './sass/main.scss'
import CreateEmployee from './pages/CreateEmployee';
import EmployeesList from './pages/EmployeesList'
import { EmployeesProvider } from './utils/context'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeesProvider>
        <Routes>
          <Route path={'/'} element={<CreateEmployee />} />
          <Route path={'/employees-list'} element={<EmployeesList />} />
        </Routes>
      </EmployeesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
