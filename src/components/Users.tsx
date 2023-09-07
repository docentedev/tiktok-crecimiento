import React from 'react';
import styles from './Users.module.css';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { User } from '../App';

const Users = ({ users }: { users: User[] }) => {
    return (
        <div className={styles.users}>
            {users.map((user, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.username}>
                        {user.username}
                    </div>
                    <div className={styles.icon}>{user.points !== 0 ? user.points : <CommentIcon fontSize="small" />}</div>
                </div>
            ))}
        </div>
    )
};

export default Users;