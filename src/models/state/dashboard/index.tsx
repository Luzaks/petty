import { Contents } from '../..';

export const authRoutes: Contents.RouteProps[] = [{
    id: 1,
    title: 'Home',
    route: '/home',
},
{
    id: 2,
    title: 'Products',
    route: '/product',
    dropdown: [
        {
            title: 'Option 1',
            route: '/option-1'
        },
        {
            title: 'Option 2',
            route: '/option-2'
        },
        {
            title: 'Option 3',
            route: '/option-3'
        },
    ],
    isOpened: false,
},
{
    id: 3,
    title: 'Resources',
    route: '/resources',
    dropdown:[
        {
            title: 'Option 1',
            route: '/option-1'
        },
        {
            title: 'Option 2',
            route: '/option-2'
        },
        {
            title: 'Option 3',
            route: '/option-3'
        },
    ],
    isOpened: false,
},
{
    id: 4,
    title: 'Pricing',
    route: '/pricing'
}
];