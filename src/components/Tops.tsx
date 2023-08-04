import React from 'react';
import styles from './Tops.module.css'
import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Tops = ({ users: { topUsers, lastUser } }: any) => {
    const users = [...topUsers, lastUser];
    if (users[0]) users[0].color = '#C9B037';
    if (users[1]) users[1].color = '#B4B4B4';
    if (users[2]) users[2].color = '#AD8A56';
    if (users[3]) users[3].color = '';

    return (
        <div className={styles.tops}>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
            >
                {users.map((user: any, index: number) => (
                    <ListItem key={index}>
                        <ListItemButton>
                            <ListItemIcon>
                                {user.color !== '' ? (<StarIcon sx={{ color: user.color }} />) : (<AddReactionIcon />)}                            </ListItemIcon>
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
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div >
    )
};

export default Tops;