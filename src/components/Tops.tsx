import React from 'react';
import styles from './Tops.module.css'
import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { User } from '../App';
import { userVoid } from '../utils';

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
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
            >
                {users.map((user: User, index: number) => (
                    <ListItem key={index}>
                        <ListItemButton>
                            {user.username && user.points > 0 ? (
                                <>
                                    <ListItemIcon>
                                        {user.color !== '' ? (<StarIcon sx={{ color: user.color }} />) : (<AddReactionIcon />)}
                                    </ListItemIcon>
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        href={`https://www.tiktok.com/@${user.username}`}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.4rem',
                                            fontWeight: '400',
                                        }}
                                        underline="hover">
                                        {user.username}
                                    </Link>
                                    <ListItemText style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }} primary={user.points} />
                                </>
                            ) : (<>
                                <ListItemIcon>
                                   <AutorenewIcon /> 
                                </ListItemIcon>
                                <ListItemText style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }} primary="" />
                            </>)}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div >
    )
};

export default Tops;