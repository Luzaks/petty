import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import { Notification } from '../../../../shared';
import Avatar01 from '../../../../assets/images/avatar-11.svg';
import Avatar02 from '../../../../assets/images/avatar-12.svg';
import Avatar03 from '../../../../assets/images/avatar-13.svg';
import Avatar04 from '../../../../assets/images/avatar-14.svg';
import Avatar05 from '../../../../assets/images/avatar-05.svg';


import './index.css';



const Sections = ({}) => {

    const notifications = [
        {
            opacity: 'opacity-90',
            title: 'Miaw 1',
            type: 0,
            username: 'Olivia Rhye',
            tagname: '@oliviarhye'
        },
        {
            opacity: 'opacity-80',
            title: 'Miaw 2',
            type: 1,
            kudosBy: {
                post: {
                    title: 'Clubhouse 101',
                    users: [
                        {
                            username: 'Candice Wu',
                            tagname: '@candicewu'
                        },
                        {
                            username: 'Olivia Rhye',
                            tagname: '@oliviarhye'
                        },
                        {
                            username: 'Olivia Rhye',
                            tagname: '@oliviarhye'
                        },
                    ]
                }
            },
        },
        {
            opacity: 'opacity-70',
            title: 'Miaw 3',
            type: 2,
            teamUp: {
                teamUpBy: 'Phoenix Baker',
                teamUpIn: 'Melbourne Starups group'
            }
        },
        {
            opacity: 'opacity-60',
            title: 'Miaw 4',
            type: 3,
            challenge: {
                challengeBy: 'Lana Steiner Baker',
                challengeTitle: 'The 10K users challenge'
            }
        },
    ];

    const avatares = [
        {
            img: Avatar01,
            zIndex: 'z-10'
        },
        {
            img: Avatar02,
            zIndex: 'z-20'
        },
        {
            img: Avatar03,
            zIndex: 'z-30'
        },
        {
            img: Avatar05,
            zIndex: 'z-40'
        },
        {
            img: Avatar04,
            zIndex: 'z-50'
        },
    ];

    const stars =[...Array(5).keys()];

    const metrics = [
        {
            title: '400+',
            subTitle: 'Projects completed',
        },
        {
            title: '600%',
            subTitle: 'Return on investment',
        },
        {
            title: '10K',
            subTitle: 'Global downloads',
        }
    ];

    const sectionOneTitle: string = 'Zero Hassle Push to Talk conversations';
    const sectionOneSubtitle: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const sectionOneReviews: string = 'from 200+ reviews';

    const sectionTwoTitle: string = 'Great products, faster than ever';
    const sectionTwoSubTitle: string = 'Everything you need to build corporate and great products.';

    const sectionThreeTitle: string = 'We’ve really sped up our workflow with Company  and haven’t looked back.';
    const sectionThreeUser: string = 'Katherine Moss';
    const sectionThreeJob: string = 'Project Manager, Layers';

    return(
        <div className="sections-container">
            <div className='w-full h-[170vh] lg:h-[100vh] flex items-center justify-center'>
                <div className='w-full h-full flex flex-col lg:flex-row'>
                    <div className='section-one-div'>
                        <div className='w-full flex flex-col items-start text-start'>
                            <h1 className='text-3xl xl:text-6xl lg:text-5xl font-semibold leading-[2.5rem] 2xl:leading-[4.5rem] xl:leading-[4.5rem] lg:leading-[4.5rem] '>{sectionOneTitle}</h1>
                            <div className='pl-2 w-[70%] text-start mt-4 '>
                                <h2 className='text-base text-gray-500'>{sectionOneSubtitle}</h2>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center justify-start 2xl:flex-row xl:flex-row lg:flex-row md:flex-row'>
                            <button className='font-normal w-full 2xl:w-fit xl:w-fit lg:w-fit md:w-fit text-sm border-[1px] flex items-center justify-center border-gray-300 text-gray-900 rounded-lg px-6 py-3'>
                                <PlayCircleOutlineIcon sx={{ fontSize: 17}}></PlayCircleOutlineIcon>  
                                <span className='ml-2'>Demo</span>
                            </button>
                            <button className='flex w-full 2xl:w-fit xl:w-fit lg:w-fit md:w-fit ml-0 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 mt-4 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 items-center justify-center text-white text-sm font-normal bg-blue-600 rounded-lg px-6 py-3'>Get started</button>
                        </div>
                        <div className='w-full flex items-center justify-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start'>
                            <div className='w-fit flex items-center justify-start'>
                            {
                                avatares.map((avatar, index) => (
                                    <div key={index} className={`rounded-full -ml-[15px] bg-white w-[37px] h-[37px]' flex items-center justify-center relative ${avatar.zIndex}`}>
                                        <img className='w-[36px] h-[36px]' src={avatar.img} alt="" />
                                    </div>
                                ))
                            }
                            </div>
                            <div className='w-fit flex flex-col items-start justify-center ml-2'>
                                <div className='w-fit flex items-center justify-start'>
                                    {
                                        stars.map((star, index) => (
                                         <StarIcon key={index} sx={{ color: '#FEC84B' }} fontSize="small"></StarIcon>
                                        ))
                                    }
                                    <span className='text-gray-900 text-semibold text-xs ml-1'>5.0</span>
                                </div>
                                <div className='w-fit flex items-center justify-start'>
                                    <span className='text-xs text-gray-500'>{sectionOneReviews}</span>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div className='relative w-full h-[70vh] lg:w-1/2 lg:h-full'>
                        <div className='absolute bottom-0 w-full h-2/3 lg:h-full bg-gray-100 rounded-t-full'>
                            
                        </div>
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 bg-hero-pattern bg-contain bg-bottom bg-no-repeat w-[80%] lg:w-full h-full flex items-end justify-center relative'>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[85vh] lg:h-[50vh] pt-10 lg:pt-0 flex flex-col items-center'>
                
                <div className='w-full h-1/2 flex flex-col items-center justify-center bg-blue-50 px-4 lg:px-0 text-center lg:bg-transparent pt-10 2xl:pt-0 xl:pt-0'>
                    <h2 className='text-lg lg:text-3lg font-semibold leading-[1.5rem] lg:leading-[3rem]'>{sectionTwoTitle}</h2>
                    <h3 className='text-base text-gray-500'>{sectionTwoSubTitle}</h3>
                </div>
                <div className='w-full h-fit 2xl:h-1/2 xl:h-1/2 lg:h-1/2 bg-blue-50 pb-20 2xl:pb-0 xl:pb-0 lg:pb-0 rounded-lg flex flex-col 2xl:flex-row xl:flex-row lg:flex-row items-center justify-center'>
                    {
                        metrics.map((metric, index) => (
                            <div key={index} className='px-6 h-full flex flex-col items-center justify-center'>

                                <span className='text-6xl text-blue-600 font-bold'>{metric.title}</span>
                                <span className='text-sm text-gray-900 mt-6'>{metric.subTitle}</span>
                            </div>          
                        ))
                    }
                </div>
            </div>
            <div className='w-full h-[75vh] lg:h-[50vh] my-4 lg:my-20 flex items-start justify-center'>
                <div className='max-w-[1280px] w-full h-full flex flex-col lg:flex-row '>
                <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-start justify-evenly lg:justify-between my-8 lg:my-0'>
                        <div>
                            {
                                        stars.map((start, index) => (
                                         <StarIcon key={index} sx={{ color: '#FEC84B' }} fontSize="small"></StarIcon>
                                        ))
                            }
                        </div>
                        <div className='flex justify-start text-start'>
                            <h2 className='text-2xl lg:text-4xl font-normal leading-[1.5rem] lg:leading-[3rem]'>{sectionThreeTitle}</h2>
                        </div>
                        <div className='w-full h-[39px] flex justify-start items-center '>
                            <div className='flex justify-start items-center'>
                                <div className='rounded-full bg-white w-[37px] h-[37px] flex items-center justify-center relative'>
                                    <img className='w-[36px] h-[36px]' src={Avatar04} alt="" />
                                </div>
                                <div className='w-fit flex flex-col items-start justify-center'>
                                    <p className='font-medium text-gray-900 font-sm'>{sectionThreeUser}</p>
                                    <p className='font-noromal text-gray-500 font-xs'>{sectionThreeJob}</p>
                                </div>
                            </div>
                            <div className='flex-1 flex items-center justify-end text-gray-500'>
                                <button className='w-[40px] h-[40px] mr-4 font-light text-sm border-[1px] flex items-center justify-center border-gray-200 text-gray-900 rounded-full'>
                                   <ArrowBackIcon sx={{ fontSize: 17}}></ArrowBackIcon>
                                </button>
                                <button className='w-[40px] h-[40px] font-light text-sm border-[1px] flex items-center justify-center border-gray-00 text-gray-900 rounded-full'>
                                    <ArrowForwardIcon sx={{ fontSize: 17}}></ArrowForwardIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/2 2xl:h-full xl:h-full lg:h-full w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2'>
                        <div className='w-full h-full bg-contents bg-contain bg-center 2xl:bg-right xl:bg-right lg:bg-right bg-no-repeat'>

                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );

};

/*div className='hidden absolute bottom-0 -left-[10%] w-fit h-fit 2xl:flex xl:flex lg:flex flex-col gap-y-2'>
                                {
                                    notifications.map((notification, index) => (
                                        <Notification key={index} notif={notification}></Notification>
                                    ))
                                }
                            </div>*/

export default Sections;