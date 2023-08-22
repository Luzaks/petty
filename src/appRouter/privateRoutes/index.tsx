import { Outlet, Navigate } from 'react-router-dom';
import { State } from '../../models';

const PrivateRoutes = () => {
    // TO DO: Implement authentication hook
    const { AppState } = State;
    const { authState } = AppState;
    
    return(
        authState ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes;