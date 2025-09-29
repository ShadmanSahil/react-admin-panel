import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ReviewsGrid from './pages/reviews/grid'
import ReviewsList from './pages/reviews/list'
import Users from './pages/users';
import {AuthProvider} from './context/authcontext'
import Login from './pages/login';
import ProtectedRouters from './utils/protectedrouters';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRouters />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="/reviews" element={<Navigate to="/reviews/grid" replace />} />
            <Route path="/reviews/grid" element={<ReviewsGrid />} />
            <Route path="/reviews/list" element={<ReviewsList />} />
            <Route path="/users" element={<Users />} />
          </Route>
          
        </Routes>
      </HashRouter>
    </AuthProvider>
    
  );
}


export default App;