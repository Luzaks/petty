import { Link } from 'react-router-dom';
import { OptionsProps, DropdownProps } from './index.interfaces';

import './index.css';

const Dropdown = ({ options }: DropdownProps) => {
    return(
        <div className='absolute top-[52px] bg-white transform shadow p-4 rounded-lg left-1/2 -translate-x-1/2 w-fit flex flex-col items-start'>
            {options.map((option: OptionsProps, index: number) => (
                <button className='whitespace-nowrap' key={index}>
                    <Link to={option.route}>{option.title}</Link>
                </button>
            ))}
        </div>
    );
};

export default Dropdown;