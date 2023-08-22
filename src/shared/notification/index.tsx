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
    const { opacity, type, followedBy, teamUp, challenge, kudosBy } = notif;
    return(
        <div className={`${opacity} background`}>
            {
                type === 0 && (
                <div className='notif-container'>
                    <span><span className='highlight'>{followedBy.username}</span><span>followed you!</span></span>
                    <span className='highlight'>{followedBy.tagname}</span>
                </div>
                )
            }
            {
                type === 2 && (
                    <div className='notif-container'>
                    <span><span className='highlight'>{teamUp.teamUpBy}</span><span>joined your team</span> <span className='highlight'>{teamUp.teamUpIn}</span></span>
                </div>
                )
            }
            {
                type === 3 && (
                    <div className='notif-container'>
                    <span><span className='highlight'>{challenge.challengeBy}</span><span>joined your team</span> <span className='highlight'>{challenge.challengeTitle}</span></span>
                </div>
                )
            }
            {
                type === 1 && (
                    <div className='notif-container'>
                    <span><span className='highlight'>{kudosBy.post.users.username}</span><span>and</span> <span className='highlight'>{kudosBy.post.users.amount}</span> <span>others gave you kudos on</span> <span className='highlight'>{kudosBy.post.title}</span> <span>post</span></span>
                </div>
                )
            }
        </div>
    );
};

export default Notification;