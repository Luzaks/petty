import { Contents } from '../..';
import { AuthUserProps } from './index.interfaces';
import Avatar from '../../../assets/images/avatar-01.svg';

export const authRoutes: Contents.RouteProps[] = [{
    id: 1,
    title: 'Home',
    route: '/home',
    isActualLocation: false
},
{
    id: 2,
    title: 'Dashboard',
    route: '/dashboard',
    isActualLocation: false
},
{
    id: 3,
    title: 'Projects',
    route: '/projects',
    isActualLocation: false
},
{
    id: 4,
    title: 'Tasks',
    route: '/tasks',
    isActualLocation: false
},
{
    id: 5,
    title: 'Reporting',
    route: '/reporting',
    isActualLocation: false
},
{
    id: 6,
    title: 'Users',
    route: '/users',
    isActualLocation: false
}
];
export const authState: boolean = true;

export const authUser: AuthUserProps = {
    name: '',
    lastName: '',
    avatar: Avatar
};

export { type AuthUserProps }; 