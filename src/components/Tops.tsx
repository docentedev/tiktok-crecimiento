import React from 'react';
import styles from './Tops.module.css'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { User } from '../App';
import { userVoid } from '../utils';
import MainMessage from './MainMessage';

interface TopsProps {
    topUsers: User[];
    lastUser: User;
}

const Tops = ({ topUsers, lastUser }: TopsProps) => {
    let users: User[] = [];
    if (topUsers.length === 0) {
        users = [userVoid, userVoid, userVoid, lastUser];
    } else if (topUsers.length === 1) {
        users = [...topUsers, userVoid, userVoid, lastUser];
    } else if (topUsers.length === 2) {
        users = [...topUsers, userVoid, lastUser];
    } else if (topUsers.length === 3) {
        users = [...topUsers, lastUser];
    }

    if (users[0]) users[0].color = '#C9B037';
    if (users[1]) users[1].color = '#B4B4B4';
    if (users[2]) users[2].color = '#AD8A56';
    if (users[3]) users[3].color = '';

    return (
        <div className={styles.tops}>
            <MainMessage />
            <div>
                {users.map((user: User, index: number) => (
                    <div key={index} className={styles.item}>
                        {user.username && user.points > 0 ? (
                            <>
                                <div className={styles.itemBullet}>
                                    {user.color !== '' ? (<div className={styles.bullet} style={{ backgroundColor: user.color }}>{index + 1}</div>) : (<AddReactionIcon />)}
                                </div>
                                <a
                                    className={styles.itemLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`https://www.tiktok.com/@${user.username}`}
                                >
                                    {user.username}
                                </a>
                                <div className={styles.itemPoints}>
                                    {user.points}
                                </div>
                            </>
                        ) : (<>
                            <div className={styles.itemBullet}>
                                <AutorenewIcon />
                            </div>
                            <div />
                        </>)}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Tops;