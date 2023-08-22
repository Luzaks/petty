import { useState, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AvatarGroup from '../../../../assets/images/avatar-group.svg';
import './index.css';

const questions: any[] = [
    {
        id: 10,
        title: 'Is there a free trial available?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        id: 11,
        title: 'Can I change my plan later?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        id: 12,
        title: 'What is your cancellation policy?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        id: 13,
        title: 'Can other info be added to an invoice?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        id: 14,
        title: 'How does billing work?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        id: 15,
        title: 'How does billing work?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        id: 16,
        title: 'How do I change my account email?',
        isOpened: false,
        content:'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',

    }
];

const FAQ = ({}) => {
    const fqaHeader: string = 'Frequently asked questions';
    const fqaSubHeader: string = 'Everything you need to know about the product and billing.';
    const fqaTextOne: string = 'Still have questions?';
    const fqaTextTwo: string = 'Can’t find the answer you’re looking for? Please chat to our friendly team.';
    const fqaBtn: string =  'Get in touch';
    const [content, setContent] = useState(questions);

    useEffect(() => {

    }, [content]);

    const handleOpenQuestion = (item: any) => {
        const result = content.map(question => {
            if (question.id === item.id) {
                question.isOpened = !question.isOpened;
            }
            return question;
        });

        setContent(result);
    };

    return(
        <>        
        <div className="faq-section-container bg-gray-50 h-[100vh]">
            <div className="w-full flex flex-col items-center justify-center max-w-[1280px]">
                <div className="fqa-header mb-8 px-4 lg:px-0">
                    <h2 className='text-lg lg:text-3lg font-semibold'>{fqaHeader}</h2>
                    <p className='text-sm font-normal text-gray-500'>{fqaSubHeader}</p>
                </div>
                <div className="fqa-content w-[80%] lg:w-[50%] max-w-[1280px] flex flex-col justify-between">
                    {
                        content.map((question, index) => {
                            return (
                                <div key={index} className='w-full flex flex-col text-justify border-b-[1px] border-b-gray-200 py-4 text-sm text-gray-900'>
                                    <div className='w-full flex justify-between items-center'>
                                        {question.title}
                                        <button onClick={() => handleOpenQuestion(question)}>
                                        {
                                            !question.isOpened && (
                                                <AddCircleOutlineIcon sx={{color: '#1570EF', fontSize: 18}}></AddCircleOutlineIcon>   
                                            )
                                        }
                                        {
                                            question.isOpened && (
                                                <RemoveCircleOutlineIcon sx={{color: '#1570EF', fontSize: 18}}></RemoveCircleOutlineIcon>   
                                            )
                                        }
                                        </button>
                                    </div>
                                    {
                                        question.isOpened && (
                                            <div className='my-2 text-gray-500 text-xs'>{question.content}</div>
                                        )
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className='faq-section-container bg-white h-[40vh]'>
            <div className='w-full h-full flex flex-col items-center justify-evenly px-4 lg:px-0'>
                    <div>
                        <img src={AvatarGroup} alt="avatares" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-base font-medium'>{fqaTextOne}</h3>
                        <p className='text-xs text-gray-500 text-center'>{fqaTextTwo}</p>
                    </div>
                    <div>
                    <button className='flex items-center justify-center text-white text-xs font-light bg-blue-600 rounded-lg px-4 py-2'>
                        {fqaBtn}
                    </button>
                    </div>
            </div>

        </div>
        </>
    );
};

export default FAQ;