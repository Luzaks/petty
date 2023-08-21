import { useState, useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DashTableProps } from './index.interfaces';
import { Contents } from '../../../../models';
import './index.css';
import { UserProps } from '../../../../models/state';

interface FilterProps {
    filtersOpen: boolean;
    state: string[]; 
    country: string[]; 
    name: string[]; 
    genre: string[]; 
    lastname: string[];
}

const filterState: FilterProps = {
    filtersOpen: false,
    country: [],
    state: [],
    name: [],
    genre: [],
    lastname: []
};

const DashTable = (dashTableProps: DashTableProps) => {
    const { tableHeaders, users, handleAddModal, handleEraseUser } = dashTableProps;
    const { DashboardContent } = Contents;
    const { trashIcon } = DashboardContent;

    const [filtersApplied, setFiltersApplied] = useState<boolean>(false);
    const [stateFilter, setStateFilter] = useState<string[]>([]);
    const [stateValue, setStateValue] = useState<string>('');
    const [nameFilter, setNameFilter] = useState<string[]>([]);
    const [countryFilter, setCountryFilter] = useState<string[]>([]);
    const [countryValue, setCountryValue] = useState<string>('');
    const [genreFilter, setGenreFilter] = useState<string[]>([]);
    const [genreValue, setGenreValue] = useState<string>('');
    const [lastnameFilter, setLastnameFilter] = useState<string[]>([]);
    const [usersFiltered, setUsersFilterd] = useState<UserProps[]>(users);

    useEffect(() => {
        const aux = handleApplyFilters();
        setUsersFilterd(aux);

    }, [users, stateFilter, nameFilter, countryFilter, genreFilter, lastnameFilter]);

    const handleApplyFilters = () => {
        return users.filter((item: any) => {
            const conditionalOne: boolean = stateFilter.length > 0 ? stateFilter.includes(item.state.toLowerCase()) : true;
            const conditionalTwo: boolean = nameFilter.length > 0 ? nameFilter.includes(item.name.toLowerCase()) : true;
            const conditionaThree: boolean = countryFilter.length > 0 ? countryFilter.includes(item.country.toLowerCase()) : true;
            const conditionaFour: boolean = genreFilter.length > 0 ? genreFilter.includes(item.genre.toLowerCase()) : true;
            const conditionaFive: boolean = lastnameFilter.length > 0 ? lastnameFilter.includes(item.lastname.toLowerCase()) : true;

            return conditionalOne && conditionalTwo && conditionaThree && conditionaFour && conditionaFive;
        });
    };
    
    const handleOpenFilters = () => {
        setFiltersApplied(prevState => !prevState);
    };

    const handleChangeState = (ev: any) => {
        if (ev.key === 'Enter') {
            setStateFilter([...stateFilter, ev.target.value.toLowerCase()]);
            setStateValue('');
        }
    };

    const handleOnChangeState = (ev: any) => {
        setStateValue(ev.target.value);
    };
    const handleChangeCountry = (ev: any) => {
        if (ev.key === 'Enter') {
            setCountryFilter([...countryFilter, ev.target.value.toLowerCase()]);
            setCountryValue('');
        }
    };

    const handleEraseCountry = (filter: string) => {
        if (countryFilter.length > 0) {
            const result = countryFilter.filter((item) => item !== filter);
            setCountryFilter([...result]);
        }
    };
    const handleEraseState = (filter: string) => {
        if (stateFilter.length > 0) {
            const result = stateFilter.filter((item) => item !== filter);
            setStateFilter([...result]);
        }
    };
    const handleEraseGenre = (filter: string) => {
        if (genreFilter.length > 0) {
            const result = genreFilter.filter((item) => item !== filter);
            setGenreFilter([...result]);
        }
    };

    const handleOnChangeCountry = (ev: any) => {
        setCountryValue(ev.target.value);
    };
    const handleChangeName = (value: string) => {
        setNameFilter([...nameFilter, value]);
    };
    const handleChangeGenre = (ev: any) => {
        if (ev.key === 'Enter') {
            setGenreFilter([...genreFilter, ev.target.value.toLowerCase()]);
            setGenreValue('');
        }
    };

    const handleOnChangeGenre = (ev: any) => {
        setGenreValue(ev.target.value);
    };

    const handleChangeLastname = (value: string) => {
        setLastnameFilter([...lastnameFilter, value]);
    };

    return (
        <div className="dash-table-container">
            <div className='dash-table-filters-container'>
                <div className='flex flex-col w-fit'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-start mb-2'>
                        <button onClick={handleOpenFilters} className={filtersApplied ? 'filter-button h-[30px] w-fit filter-button-white outline outline-2 outline-gray-100' : 'filter-button h-[30px] w-fit filter-button-white'}>
                            <FilterListIcon className='mr-1' sx={{ fontSize: 17}}></FilterListIcon>
                            Filters
                        </button>
                        <div className='flex ml-0 md:ml-2 items-center mt-2 md:mt-0'>
                            {
                                countryFilter.length > 0 && (
                                    <div className='flex items-center'>
                                        {
                                            countryFilter.map((item, index) => (
                                                <button className='filter-button user-table-filter' key={index} onClick={() => handleEraseCountry(item)}>
                                                    pais:{item}
                                                    <ClearIcon className='ml-1' sx={{ fontSize: 17 }}></ClearIcon>
                                                </button>
                                            ))
                                        }
                                    </div>
                                   
                                )
                            }
                             {
                                stateFilter.length > 0 && (
                                    <div className='flex items-center'>
                                        {
                                            stateFilter.map((item, index) => (
                                                <button className='filter-button user-table-filter' key={index} onClick={() => handleEraseState(item)}>
                                                    estado:{item}
                                                    <ClearIcon className='ml-1' sx={{ fontSize: 17 }}></ClearIcon>
                                                </button>
                                                
                                            ))
                                        }
                                    </div>
                                   
                                )
                            }
                             {
                                genreFilter.length > 0 && (
                                    <div className='flex items-center'>
                                        {
                                            genreFilter.map((item, index) => (
                                                <button className='filter-button user-table-filter' key={index} onClick={() => handleEraseGenre(item)}>
                                                    género:{item}
                                                    <ClearIcon className='ml-1' sx={{ fontSize: 17 }}></ClearIcon>
                                                </button>
                                            ))
                                        }
                                    </div>
                                   
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='self-start'>
                    <button className='filter-button bg-blue-600 h-[30px] w-[30px] md:w-fit text-white' onClick={handleAddModal}>
                       <AddIcon className='md:mr-1' sx={{ fontSize: 17 }}></AddIcon>
                        <span className='hidden md:inline'>Nuevo Usuario</span>
                    </button>
                </div>
            </div>
            {
                        filtersApplied && (
                            <div className='text-xs flex items-center w-full mb-2 flex-col md:flex-row'>
                                <input className='user-table-filter-input' type="text" name="genre" onChange={handleOnChangeGenre} value={genreValue} onKeyDown={handleChangeGenre} placeholder='Género' />
                                <input className='user-table-filter-input' type="text" name="country" onChange={handleOnChangeCountry} value={countryValue} onKeyDown={handleChangeCountry} placeholder='País' />
                                <input className='user-table-filter-input' type="text" name="state" onChange={handleOnChangeState} value={stateValue} onKeyDown={handleChangeState} placeholder='Estado' />
                            </div>
                        )
                    }
            <table className="dash-table-component">
                <thead className='dash-table-t-head'>
                    <tr>
                        {
                            tableHeaders.map((header, index) => (
                                <th key={index}>{header.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            usersFiltered.map((user: any, index: number): any => (
                                <tr className='user-table-row' key={index}>
                                    <td>
                                        <div className=' w-full h-full flex items-center justify-start '>
                                            <img className='w-[35px] h-[35px] mr-2' src={user.avatar} alt={user.name} />
                                            <span>{user.name + ' ' + user.lastName}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={user.genre === 'Hombre' ? 'bg-emerald-50 py-1 px-2 text-emerald-700 rounded-full w-fit' : 'bg-violet-50 py-1 px-2 text-violet-700 rounded-full w-fit'}>
                                            {user.genre}
                                        </span>
                                    </td>
                                    <td>{user.country}</td>
                                    <td>{user.state}</td>
                                    <td>
                                        <button onClick={() => handleEraseUser(user)}>
                                            <img src={trashIcon} alt="delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    );
};

export default DashTable;