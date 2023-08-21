import { useState, useEffect } from 'react';
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
                    <div className='flex items-center justify-start'>
                        <button onClick={handleOpenFilters} className='filter-button w-[65px] filter-button-white'>
                            Filters
                        </button>
                        <div>
                            {
                                countryFilter.length > 0 && (
                                    <div>
                                        {
                                            countryFilter.map((item, index) => (
                                                <button key={index} onClick={handleChangeCountry}>{item}</button>
                                            ))
                                        }
                                    </div>
                                   
                                )
                            }
                             {
                                stateFilter.length > 0 && (
                                    <div>
                                        {
                                            stateFilter.map((item, index) => (
                                                <button key={index} onClick={handleChangeCountry}>{item}</button>
                                            ))
                                        }
                                    </div>
                                   
                                )
                            }
                             {
                                genreFilter.length > 0 && (
                                    <div>
                                        {
                                            genreFilter.map((item, index) => (
                                                <button key={index} onClick={handleChangeCountry}>{item}</button>
                                            ))
                                        }
                                    </div>
                                   
                                )
                            }
                        </div>
                    </div>
                  
                    {
                        filtersApplied && (
                            <div className='flex items-center w-full'>
                                <input type="text" name="genre" onChange={handleOnChangeGenre} value={genreValue} onKeyDown={handleChangeGenre} placeholder='Género' />
                                <input type="text" name="country" onChange={handleOnChangeCountry} value={countryValue} onKeyDown={handleChangeCountry} placeholder='País' />
                                <input type="text" name="state" onChange={handleOnChangeState} value={stateValue} onKeyDown={handleChangeState} placeholder='Estado' />
                            </div>
                        )
                    }
                </div>
                <div>
                    <button className='filter-button bg-blue-600 text-white' onClick={handleAddModal}>
                        + Nuevo Usuario
                    </button>
                </div>
            </div>
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
                                    <td>{user.genre}</td>
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