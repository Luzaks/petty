import { 
    type TableHeadersProps, 
    type CountriesAllowedProps, 
    type GenresProps 
} from './index.interfaces';
import AddDesktopIcon from '../../../assets/images/add-desktop.svg';
import TrashIcon from '../../../assets/images/trash-icon.svg';

export const pageTitle: string = 'Logotipo';
export const tableHeaders: TableHeadersProps[] = [
    {
        title: 'Cliente',
    },
    {
        title: 'Género'
    },
    {
        title: 'País'
    },
    {
        title: 'Estado'
    },
    {
        title: ' '
    }
];

export const countriesAllowed: CountriesAllowedProps[] = [
    {
        country: 'Mexico',
        state: [
            {
                name: 'CDMX'
            },
            {
                name: 'Nuevo Leon'
            },
            {
                name: 'Jalisco'
            },
            {
                name: 'Yucatan'
            },
            {
                name: 'EDOMEX'
            },
        ],
    },
    {
        country: 'USA',
        state: [
            {
                name: 'Alabama'
            },
            {
                name: 'Florida'
            },
            {
                name: 'Idaho'
            },
            {
                name: 'Kansas'
            },
            {
                name: 'Montana'
            },
        ],
    },
    {
        country: 'Canada',
        state: [
            {
                name: 'Ontario'
            },
            {
                name: 'Quebec'
            },
            {
                name: 'Alberta'
            },
            {
                name: 'Manitoba'
            },
            {
                name: 'Nova Scotia'
            },
        ],
    },
];

export const genresAllowed: GenresProps[] = [
    {
        genre: 'Hombre',
    },
    {
        genre: 'Mujer',
    },
];

export const addDesktopIcon: string = AddDesktopIcon;
export const trashIcon: string = TrashIcon;
