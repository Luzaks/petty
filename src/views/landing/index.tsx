import { useState } from 'react';
import { ScrollContainer, NavBar } from '../../shared';
import { Sections } from './components';
import { State, Contents } from '../../models';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LandingPage = ({}) => {
    const navigate = useNavigate();
    
    const { AppState, LandingState } = State;
    const { AppContent, LandingContent } = Contents;
    const { authState, authUser } = AppState;
    const { nonAuthRoutes } = LandingState;
    const { pageTitle } = LandingContent;
    const { homeRoute, loginRoute } = AppContent;
    const [routes, setRoutes] = useState(nonAuthRoutes);

    const locationWindow: string = window.location.pathname;

    const handleOnClickRoute = (route: any) => {
        if (route.dropdown) {
            route.isOpened = !route.isOpened;
            const newArr = routes.map((item: any) => {
                if (item.id === route.id) {
                  return { ...item, ['isOpened']: route.isOpened };
                } else {
                  return item;
                }
              });
            setRoutes(newArr);
        } else {
            navigate(route.route);
        }
    };

    return(
        <ScrollContainer>
            {(
              <div className='dashboard-content-outher-container'>
                 <NavBar 
                    homeRoute={homeRoute}
                    loginRoute={loginRoute}
                    routes={routes}
                    isAuth={false}
                    handleOnClickRoute={handleOnClickRoute}
                    pageTitle={pageTitle}
                    location={locationWindow}
                    authUser={authUser}
                ></NavBar>
                <div className='flex w-full h-full items-center justify-center'>
                <div className='landing-content-inner-container max-w-[1280px]'>
                            <Sections></Sections>
                    </div>
                </div>
              </div>
            )}
        </ScrollContainer>
    );
};

export default LandingPage;