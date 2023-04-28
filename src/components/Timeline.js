import React, { useState } from 'react';
import './timeline.css';
import Notification from './Notification';
import { useNotification } from '../context/NotificationContext';

function Timeline() {
    const { notifs, unreadCount, markAllRead } = useNotification();
    return (
        <div className='timeline'>
            <header className='timeline-header'>
                <div className='notifs-count'>
                    <h2>Notifications</h2>
                    <h2>{unreadCount}</h2>
                </div>
                <button className='read-toggle' onClick={() => markAllRead()}>
                    Mark all as read
                </button>
            </header>
            {notifs.map((n, key) => <Notification key={key} data={n} />)}
        </div>
    )
}

export default Timeline;