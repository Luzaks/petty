import { type UserProps } from './index.interfaces';
import AvatarOne from '../../../assets/images/avatar-01.svg';
import AvatarTwo from '../../../assets/images/avatar-02.svg';
import AvatarThree from '../../../assets/images/avatar-03.svg';
import AvatarFour from '../../../assets/images/avatar-04.svg';
import AvatarFive from '../../../assets/images/avatar-05.svg';
import AvatarSix from '../../../assets/images/avatar-11.svg';
import AvatarSeven from '../../../assets/images/avatar-12.svg';
import AvatarEight from '../../../assets/images/avatar-13.svg';

export const usersInitialState: UserProps[] = [
    {
        id: 'xMXndickr02',
        name: 'Carlos',
        lastName: 'Martinez',
        avatar: AvatarOne,
        country: 'USA',
        state: 'Idaho',
        genre: 'Hombre'
    },
    {
        id: 'xMXndickr03',
        name: 'Augusto',
        lastName: 'Roberts',
        avatar: AvatarTwo,
        country: 'USA',
        state: 'Florida',
        genre: 'Hombre'
    },
    {
        id: 'xMXndickr04',
        name: 'Camila',
        lastName: 'Hernández',
        avatar: AvatarThree,
        country: 'México',
        state: 'CDMX',
        genre: 'Mujer'
    },

    {
        id: 'xMXndickr05',
        name: 'Eduardo',
        lastName: 'Jimenez',
        avatar: AvatarFour,
        country: 'Cánada',
        state: 'Ontario',
        genre: 'Hombre'
    },

    {
        id: 'xMXndickr06',
        name: 'Gabriela',
        lastName: 'Fuentes',
        avatar: AvatarFive,
        country: 'México',
        state: 'Nuevo Leon',
        genre: 'Mujer'
    },

    {
        id: 'xMXndickr07',
        name: 'Andrea',
        lastName: 'Ordaz',
        avatar: AvatarSix,
        country: 'USA',
        state: 'Alabama',
        genre: 'Mujer'
    },

    {
        id: 'xMXndickr08',
        name: 'Fernando',
        lastName: 'Garcia',
        avatar: AvatarSeven,
        country: 'México',
        state: 'CDMX',
        genre: 'Hombre'
    },
];