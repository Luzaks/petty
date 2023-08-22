import { Logo } from '../../../../shared';
import { Contents } from '../../../../models';
import LandingLogo from '../../../../assets/images/logomark.svg';
import SocialO1 from '../../../../assets/images/social-01.svg';
import SocialO2 from '../../../../assets/images/social-02.svg';
import SocialO3 from '../../../../assets/images/social-03.svg';
import SocialO4 from '../../../../assets/images/social-04.svg';
import SocialO5 from '../../../../assets/images/social-05.svg';
import SocialO6 from '../../../../assets/images/social-06.svg';
import AppStore from '../../../../assets/images/App-Action.svg';
import MobileStore from '../../../../assets/images/App-Store-02.svg';

import './index.css';


const FooterLanding = ({}) => {

    const social: any[] = [
        {
            img: SocialO1
        }, 
        {
            img:SocialO2
        }, 
        {
            img:SocialO3
        }, 
        {
            img:SocialO4
        }, 
        {
            img:SocialO5
        }, 
        {
            img:SocialO6
        }
    ];

    const features: string[] = ['Overview', 'Features', 'Pricing', 'Careers', 'Help', 'Privacy'];
    const { AppContent } = Contents;
    const { homeRoute } = AppContent;


    return (
        <div className='footer-section-container bg-gray-800 p-8 lg:p-14 font-light'>
            <div className='w-full h-full flex flex-col lg:flex-row flex-1 lg:items-center justify-center lg:justify-between'>
              <div className='flex h-1/2 lg:h-full flex-col items-start justify-evenly text-gray-200'>
                <div className='flex'>
                    <Logo
                        title='Logotipo'
                        image={LandingLogo}
                        route={homeRoute.route}
                    ></Logo>
                </div>
                <div className='text-xs flex-wrap'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <p>
                    adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                <div className='flex h-[30%] md:h-fit w-full md:w-fit flex-wrap flex-col md:flex-row md:gap-x-3 items-start lg:items-center text-xs'>
                    {
                        features.map((item, index) => {
                            return(
                                <a key={index} className='cursor-pointer'>{item}</a>
                            )})
                    }
                </div>
              </div>
              <div className='h-1/2 md:h-full flex flex-col text-xs justify-evenly items-start text-gray-200 py-4'>
                <p>Get the app</p>
                <div className='w-full flex flex-row lg:flex-col gap-x-6'>
                <button className='lg:mb-2'>
                    <img src={AppStore} alt="app-store" />
                </button>
                <button>
                    <img src={MobileStore} alt="android-store" />
                </button>
                </div>
              </div>
            </div>
            <div className='w-full border-t-[1px] border-t-gray-500 flex flex-col lg:flex-row items-center justify-between pt-4 lg:pt-8'>
                <div className='order-2 lg:order-1 text-gray-500 text-xs font-extralight w-full'>
                    © 2022 FlexBip. All rights reserved.
                </div>
                <div className='flex order-1 lg:order-2  gap-x-3 w-full md:w-[30%] items-start mb-2 mb:mb-0 lg:items-center justify-start lg:justify-end'>
                    {
                        social.map((item: any, index) => (
                            <button key={index} className='flex items-center justify-center'>
                                <img className='scale-50' src={item.img} alt="" />
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FooterLanding;