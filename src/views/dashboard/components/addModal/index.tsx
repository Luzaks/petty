import { useState } from 'react';
import { CountriesAllowedProps, GenresProps, StatesAllowedProps, DashboardContent } from '../../../../models/content';
import { type AddModalProps } from '..';
import './index.css';

const AddModal = ({ handleAddModal, countries, genres, handleSubmit }: AddModalProps) => {

    const [userName, setUserName] = useState<string>('');
    const [usernameErr, setUsernameErr] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<CountriesAllowedProps>(countries[0]);
    const [selectedState, setSelectedState] = useState<StatesAllowedProps>(selectedCountry.state[0]);
    const [selectedGenre, setSelectedGenre] = useState<GenresProps>(genres[0]);

    const handleCountryChange = (ev: any) => {
        ev.preventDefault();
        const country: CountriesAllowedProps = countries.filter((country: CountriesAllowedProps) => country.country === ev.target.value)[0];
        setSelectedCountry(country);
    };

    const handleStateChange = (ev: any) => {
        ev.preventDefault();
        const state: StatesAllowedProps = selectedCountry.state.filter((state: StatesAllowedProps) => state.name === ev.target.value)[0];
        setSelectedState(state);
    };

    const handleGenreChange = (ev: any) => {
        ev.preventDefault();
        const genre: GenresProps = genres.filter((genre: GenresProps) => genre.genre === ev.target.value)[0];
        setSelectedGenre(genre);
    };

    const handleOnChange = (ev: any) => {
        ev.preventDefault();
        const { value } = ev.target;
        console.log(value.split(' ').length, 'okoko');
        if (value.trim() === '') {
            setUsernameErr(true);
        } else {
            setUsernameErr(false);
            setUserName(ev.target.value);
        }
    };

    const handleOnSubmit = (ev: any) => {
        ev.preventDefault();
       const check: string[] = userName.split(' ').filter((item) => item !== '');
       if (check.length === 2) {
        const obj = {
            name: userName,
            lastName: userName,
            avatar: userName,
            country: selectedCountry.country,
            state: selectedState.name,
            genre: selectedGenre.genre
        };
        handleSubmit(obj);
       } else {
        setUsernameErr(true);
       }
    };

    const handleCancel = () => {

    };

    return (
        <div className='add-modal-container'>
            <div onClick={handleAddModal} className='add-modal-bg'></div>
            <div className='add-modal-content-container'>
                <div className='add-modal-content-container-header'>
                    <div className='add-icon'></div>
                    <h2 className='text-base font-medium my-4'>Agregar Nuevo Usuario</h2>
                    <span className='text-gray-500 text-xs'>This blog post has been published. Team members will be able to edit this post and republish changes.</span>
                </div>
                <form action="" className='w-full text-gray-900 flex flex-1 flex-col items-start justify-between pt-4' onSubmit={handleOnSubmit}>
                    <label className='add-label-input' htmlFor="name">
                        <span className='text-xs'>Nombre</span>
                        <input 
                            id="name"
                            name="name"
                            className={usernameErr ? 'add-input-error' : 'add-input-no-error'} 
                            type="text" 
                            value={userName} 
                            onChange={handleOnChange} 
                            placeholder={'Marta Sahagún'} 
                        />
                    </label>
                    <label className='add-label-input' htmlFor="country">
                        <span className='text-xs'>País</span>
                        <select className='add-select-input' name="country" id="country" value={selectedCountry.country} onChange={handleCountryChange}>
                            {
                                countries.map((country, index) => {
                                    return (
                                        <option key={index} value={country.country}>{country.country}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <label className='add-label-input' htmlFor="state">
                        <span className='text-xs'>Estado</span>
                        <select className='add-select-input' name="state" id="state" value={selectedState.name} onChange={handleStateChange}>
                            {
                                selectedCountry.state.map((item, index) => {
                                    return (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    )
                                })
                            }

                        </select>
                    </label>
                    <label className='add-label-input' htmlFor="genre">
                        <span className='text-xs'>Género</span>
                        <select className='add-select-input' name="genre" id="genre" value={selectedGenre.genre} onChange={handleGenreChange}>
                            {
                                genres.map((item, index: number) => {
                                    return (
                                        <option key={index} value={item.genre}>{item.genre}</option>
                                    )
                                })
                            }

                        </select>
                    </label>    
                    <section className='add-actions-container'>
                        <button className='add-modal-input-button cancel-btn' onClick={handleAddModal}>Cancel</button>
                        <button className='add-modal-input-button bg-blue-600 text-white' type='submit' >Confirm</button>
                    </section>
                </form>
            </div>
        </div>
    );

};
export default AddModal;