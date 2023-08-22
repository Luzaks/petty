import { Link } from 'react-router-dom';
import './index.css';

const Logo = ({title, image, route}: {title: string, image: any, route: string;}) => {
    return(
        <div className='navigation-container-logo-container'>
                <Link className='flex items-center italic' to={route}>
                    <img className='mr-2 w-[32px] h-[32px]' src={image} />
                    <span className='font-semibold text-lg'>{title}</span>
                </Link>
            </div>
    );
};

export default Logo;