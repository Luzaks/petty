import { ReactElement } from 'react';
import { LayoutProps } from './index.interfaces';
import './index.css';

const Layout = ({ children }: LayoutProps): ReactElement => {
    return(
        <div className='layout-container'>
            { children }
        </div>
    );
};

export default Layout;