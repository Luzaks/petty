import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollContainer, NavBar } from '../../shared';
import { DashTable, AddModal } from './components';
import { State, Contents } from '../../models';

import './index.css';
import { UserProps } from '../../models/state';

const DashboardPage = ({}) => {
    const navigate = useNavigate();
    const { AppState, DashboardState } = State;
    const { AppContent, DashboardContent } = Contents;
    const { authState, authRoutes, authUser } = AppState;
    const { usersInitialState } = DashboardState;
    const { homeRoute, loginRoute } = AppContent;
    const { pageTitle, tableHeaders, countriesAllowed, genresAllowed } = DashboardContent;
    const [routes, setRoutes] = useState(authRoutes);
    const [users, setUsers] = useState(usersInitialState);
    const [addModal, setAddModal] = useState<boolean>(false);
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

    const handleAddModal = () => {
        setAddModal(!addModal);
    };

    const handleAddNewUser = (user: UserProps) => {
        setUsers([...users, {...user}]);
    };

    const handleEraseUser = (user: UserProps) => {
        const filteredUsers: UserProps[] = users.filter((item) => item.id !== user.id);
        setUsers([...filteredUsers]);
    };
    
    return(
        <ScrollContainer>
            {(
                <>
                {addModal && (
                    <AddModal 
                        handleAddModal={handleAddModal} 
                        countries={countriesAllowed}
                        genres={genresAllowed}
                        handleSubmit={handleAddNewUser}
                    ></AddModal>
                )}
                    <div className='dashboard-content-outher-container'>
                        <NavBar 
                            homeRoute={homeRoute}
                            loginRoute={loginRoute}
                            routes={routes}
                            isAuth={authState}
                            handleOnClickRoute={handleOnClickRoute}
                            pageTitle={pageTitle}
                            location={locationWindow}
                            authUser={authUser}
                        ></NavBar>
                        <div className='dashboard-content-inner-container'>
                            <DashTable 
                                tableHeaders={tableHeaders} 
                                users={users}
                                handleAddModal={handleAddModal}
                                handleEraseUser={handleEraseUser}
                            ></DashTable>
                        </div>

                     </div>
               </>
            )}
        </ScrollContainer>
    );
};

export default DashboardPage;