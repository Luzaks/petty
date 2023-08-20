import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage, DashboardPage, LoginPage } from '../../views';
import { PrivateRoutes } from '..';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage/>} path="/" />
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardPage />} path="/dashboard"/>
        </Route>
        <Route element={<LoginPage />} path="/login"/>
        <Route path='*' element={<>Not found</>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;