import React from 'react';
import './notification.css';

function Notification(props) {
    return (
        <div className={props.data?.isRead ? 'notification' : 'notification unread'}>
            <img src={props.data?.avatar} alt={`${props.data?.name}'s profile pic`} height={50} width={50} />
            <div className='details'>
                <div><span className='name'>{props.data?.name}</span>  {props.data?.notification} {props.data?.postName || props.data?.clubName ? <span className={props.data?.postName ? 'post' : 'club'}>{props.data?.postName || props.data?.clubName}</span> : null}  {props.data?.isRead ? null : <i class="fa-sharp fa-solid fa-circle read-indicator"></i>}</div>
                <div className='created-at'>{props.data?.createdAt} ago</div>
                {props.data?.privateMessage && <div className='private-message'>{props.data?.privateMessage}</div>}
            </div>
            {props.data?.postedPic && <img src={props.data?.postedPic} alt='a picture of a chess board' height={50} width={50} className='posted-pic' />}
        </div>
    )
}

export default Notification;