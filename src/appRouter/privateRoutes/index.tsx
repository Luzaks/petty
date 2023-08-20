import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    // TO DO: Implement authentication hook
    const auth = { 'token': false };
    
    return(
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes;