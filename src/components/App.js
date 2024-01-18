import { Route, Routes, NavLink, Outlet } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="Statistics" element={<div>Statistics</div>} />
          <Route path="Database" element={<div>Database</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
