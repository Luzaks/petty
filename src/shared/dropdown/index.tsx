import { Link } from 'react-router-dom';
import { OptionsProps, DropdownProps } from './index.interfaces';

import './index.css';

const Dropdown = ({ options }: DropdownProps) => {
    return(
        <div className='absolute top-[52px] bg-black left-1/2 -translate-x-1/2'>
            {options.map((option: OptionsProps, index: number) => (
                <button key={index}>
                    <Link to={option.route}>{option.title}</Link>
                </button>
            ))}
        </div>
    );
};

export default Dropdown;