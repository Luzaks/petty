import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    // TO DO: Implement authentication hook
    const auth = { 'token': true };
    
    return(
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes;