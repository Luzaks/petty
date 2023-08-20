import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Logo, Dropdown } from '../index';

import LandingLogo from '../../assets/images/logomark.svg';
import { NavbarProps } from './index.interfaces';
import './index.css';


const NavBar = (navbarProps: NavbarProps) => {

    const { homeRoute, pageTitle, loginRoute, isAuth, routes, handleOnClickRoute } = navbarProps;

    return(
        <div className="navigation-container">
            <div className='flex items-center justify-start'>
                <div className='mr-10'>
                   <Logo route={homeRoute.route} image={LandingLogo} title={pageTitle}></Logo>
                </div>
                <div className='flex'>
                    {
                    routes.map((route, index) => (
                        <div className='navigation-routing-btn' key={index} onClick={() => handleOnClickRoute(route)}>
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
                    <div className='flex'>
                    <button className='navigation-routing-btn' onClick={() => handleOnClickRoute(loginItem)}>
                        {loginRoute.title}
                    </button> 
                    <button className='w-fit bg-blue-600 rounded-lg	py-2 px-4 text-white font-light text-base' type='submit'>Sign up</button>
                </div>
                )
            }
            {
                isAuth && (
                    <div className='flex'>
                        <button>x</button>
                        <button>y</button>
                    </div>
                )
            }
        </div>
    )
};

export default NavBar;