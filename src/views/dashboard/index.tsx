import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollContainer, NavBar } from '../../shared';
import { State, Contents } from '../../models';

import './index.css';

const DashboardPage = ({}) => {
    const navigate = useNavigate();
    const { DasboardState, AppState } = State;
    const { AppContent, DashboardContent } = Contents;
    const { authState } = AppState;
    const { authRoutes } = DasboardState;
    const { homeRoute, loginRoute } = AppContent;
    const { pageTitle } = DashboardContent;
    const [routes, setRoutes] = useState(authRoutes);



    useEffect(() => {

    }, [routes]);

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
               <div>
                    <NavBar 
                        homeRoute={homeRoute}
                        loginRoute={loginRoute}
                        routes={routes}
                        isAuth={authState}
                        handleOnClickRoute={handleOnClickRoute}
                        pageTitle={pageTitle}
                        ></NavBar>
               </div>
            )}
        </ScrollContainer>
    );
};

export default DashboardPage;