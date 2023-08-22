import { ScrollContainer } from '../../shared';
import './index.css';

const NotFoundPage = ({}) => {
    return(
        <ScrollContainer>
            {(
                <div className='not-found-container'>
                    Not found
                </div>
            )}
        </ScrollContainer>
    );
};

export default NotFoundPage;