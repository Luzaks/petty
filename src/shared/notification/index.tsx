import './index.css';

interface NotificationProps {
    opacity: string; 
    title: string; 
    type: number;
    followedBy?: any;
    teamUp?: any;
    challenge?: any;
    kudosBy?: any;
}

const Notification = ({notif}: {notif: NotificationProps}) => {
    const { opacity, title, type, followedBy, teamUp, challenge, kudosBy } = notif;
    console.log(notif, 'jfjfjfj');
    return(
        <div className={`${opacity} background`}>
            {
                type === 0 && (
                <div className='w-full h-full flex flex-col items-start justify-evenly'>
                    <span><span>{followedBy.username}</span><span>followed you!</span></span>
                    <span>{followedBy.tagname}</span>
                </div>
                )
            }
            {
                type === 2 && (
                    <div className='w-full h-full flex flex-col items-start justify-evenly'>
                    <span><span>{teamUp.teamUpBy}</span><span>joined your team</span> <span>{teamUp.teamUpIn}</span></span>
                </div>
                )
            }
            {
                type === 3 && (
                    <div className='w-full h-full flex flex-col items-start justify-evenly'>
                    <span><span>{challenge.challengeBy}</span><span>joined your team</span> <span>{challenge.challengeTitle}</span></span>
                </div>
                )
            }
            {
                type === 1 && (
                    <div className='w-full h-full flex flex-col items-start justify-evenly'>
                    <span><span>{kudosBy.post.users[0]}</span><span>and</span> <span>{kudosBy.post.users.length - 1}</span> <span>{kudosBy.post.title}</span></span>
                </div>
                )
            }
        </div>
    );
};

export default Notification;