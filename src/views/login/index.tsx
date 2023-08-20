import { useNavigate } from 'react-router-dom';

import { ScrollContainer } from '../../shared';
import { Contents } from '../../models';
import LogoMark from '../../assets/images/logomark.svg';
import './index.css';

const LoginPage = ({}) => {

    const navigate = useNavigate();
    const { LoginContent } = Contents;
    const { 
        titleHeader, 
        titleSubHeader, 
        sessionHeader, 
        passwordAnchorTitle, 
        signUpLabel, 
        signUpAnchor, 
        submitBtnTitle,
        emailPlaceholder
    } = LoginContent;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // TO DO: Implement logic for validation.
        navigate('/dashboard');

    } ;

    return(
        <ScrollContainer>
            {(
                <div className='login-container'>
                    <div className="card-container">
                    <form className='login-form' onSubmit={(e: any) => handleSubmit(e)}>
                <section className='login-section-column'>
                    <div className='mb-6'>
                        <img src={LogoMark} />
                    </div>
                    <h1 className='login-form-header'>{titleHeader}</h1>
                    <h2 className='login-form-subheader'>{titleSubHeader}</h2>
                </section>
                <section className='login-section-column'>
                    <input className='login-form-input mb-4 2xl:mb-6 xl:mb-6 lg:mb-6' placeholder={emailPlaceholder} name="username" type="email" />
                    <input className='login-form-input' name="password" type="password" />
                </section>
                <section className="login-section-row my-4">
                <label className='text-xs cursor-pointer' htmlFor="session">
                    <input className='login-form-check' id="session" type="checkbox" />
                    {sessionHeader}</label>
                    <a className='login-form-a' href="">{passwordAnchorTitle}</a>
                </section>
                <section className='login-section-column'>
                    <button className='w-full bg-blue-600 rounded-md py-2 text-white' type='submit'>{submitBtnTitle}</button>
                </section>
                <section className='login-section-column'>
                    <span className='text-gray-700 font-light text-xs mt-6'>
                        <span className='mr-1'>{signUpLabel}</span>
                        <a className='login-form-a' href="">{signUpAnchor}</a>
                    </span>
                </section>
            </form>
                    </div>
                </div>
            )}
        </ScrollContainer>
    );
};

export default LoginPage;