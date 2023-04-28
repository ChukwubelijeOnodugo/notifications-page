import { createContext, useContext, useState } from "react";

const NotificationContext = createContext(undefined);

export const NotificationProvider = ({ children }) => {
    const [notifs, setNotifs] = useState([
        { avatar: './images/avatar-mark-webber.webp', name: 'Mark Webber', notification: 'reacted to your recent post', postName: 'My first tournament today!', createdAt: '1m', isRead: false },
        { avatar: './images/avatar-angela-gray.webp', name: 'Angela Gray', notification: 'followed you', createdAt: '5m ago', isRead: false },
        { avatar: './images/avatar-jacob-thompson.webp', name: 'Jacob Thompson', notification: 'has joined your club', clubName: 'Chess Club', createdAt: '1 day', isRead: false },
        { avatar: './images/avatar-rizky-hasanuddin.webp', name: 'Rizky Hasanuddin', notification: 'sent you a private message', createdAt: '5 days', privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game", isRead: true },
        { avatar: './images/avatar-kimberly-smith.webp', name: 'Kimberly Smith', notification: 'commented on your picture', createdAt: '1 week', postedPic: './images/image-chess.webp', isRead: true },
        { avatar: './images/avatar-nathan-peterson.webp', name: 'Nathan Peterson', notification: 'reacted to your recent post', postName: '5 end-game strategies to increase your win rate', createdAt: '2 weeks', isRead: true },
        { avatar: './images/avatar-anna-kim.webp', name: 'Anna Kim', notification: 'left the group', createdAt: '2 weeks', clubName: 'Chess Club', isRead: true }
    ])

    function markAllRead() {
        setNotifs([...notifs.map(n => {
            if (n.isRead) {
                return n;
            } else if (!n.isRead) {
                n.isRead = true;
                return n;
            }
        })])
    }

    const unreadCount = notifs.filter(n => !n.isRead).length;

    return (
        <NotificationContext.Provider value={{
            notifs,
            markAllRead,
            unreadCount
        }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext);


