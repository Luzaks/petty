import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { Logo, Dropdown } from '../index';

import LandingLogo from '../../assets/images/logomark.svg';
import { NavbarProps } from './index.interfaces';
import './index.css';


const NavBar = (navbarProps: NavbarProps) => {

    const { homeRoute, pageTitle, loginRoute, isAuth, routes, handleOnClickRoute, location, authUser } = navbarProps;

    return(
        <div className="navigation-container">
            <div className='navigation-routes-container'>
                <div className='mr-10'>
                   <Logo route={homeRoute.route} image={LandingLogo} title={pageTitle}></Logo>
                </div>
                <div className='navigation-routes-inner-container'>
                    {
                    routes.map((route, index) => (
                        <div className={isAuth && (location === route.route) ? 'navigation-dash-routing-btn-selected' : 'navigation-dash-routing-btn'} key={index} onClick={() => handleOnClickRoute(route)}>
                            {route.title}
                
                                {route.dropdown && !route.isOpened && (
                                     <span className='ml-3'>
                                        <ExpandMoreIcon></ExpandMoreIcon>
                                    </span>
                                )}
                           
                           
                                {route.dropdown && route.isOpened && (
                                    <span className='ml-3'>
                                        <ExpandLessIcon></ExpandLessIcon>
                                    </span>
                                )}
                           
                           {
                                route.dropdown && route.isOpened && (
                                    <Dropdown options={route.dropdown}></Dropdown>
                                )
                            }
                        </div>)
                    )}
                </div>
            </div>
            {
                !isAuth && loginRoute && (
                    <>
                        <div className='navigation-auth-user-menu'>
                            <button className='navigation-routing-btn' onClick={() => handleOnClickRoute(loginRoute)}>
                                {loginRoute.title}
                            </button> 
                            <button className='w-fit bg-blue-600 rounded-lg	py-2 px-4 text-white font-light text-base' type='submit'>Sign up</button>
                        </div>
                        <div className='navigation-auth-user-dropdown'>
                            <button>
                                <MenuOutlinedIcon></MenuOutlinedIcon>
                            </button>
                        </div>
                    </>
                )
            }
            {
                isAuth && authUser && (
                    <>
                    <div className='navigation-auth-user-menu'>
                        <button className='mr-4'>
                            <SettingsOutlinedIcon></SettingsOutlinedIcon>
                        </button>
                        <button className='mr-5'>
                            <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
                        </button>
                        <button>
                            <img src={authUser.avatar} alt={authUser.name} />
                        </button>
                    </div>
                    <div className='navigation-auth-user-dropdown'>
                        <button>
                            <MenuOutlinedIcon></MenuOutlinedIcon>
                        </button>
                    </div>
                    </>
                )
            }
        </div>
    )
};

export default NavBar;