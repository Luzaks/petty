import { ReactElement } from 'react';
import { ScrollContainerProps } from './index.interfaces';
import './index.css';

const ScrollContainer = ({ children }: ScrollContainerProps): ReactElement => {
    return(
        <div className='scroll-container'>
            { children }
        </div>
    );
};

export default ScrollContainer;