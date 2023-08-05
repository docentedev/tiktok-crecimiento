import React from 'react';
import styles from './Users.module.css';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { User } from '../App';

const Users = ({ users }: { users: User[] }) => {
    return (
        <div className={styles.users}>
            {users.map((user, index) => (
                <ListItem disablePadding key={index}>
                    <ListItemButton>
                        <ListItemText>
                            {user.username}
                        </ListItemText>
                        <ListItemText style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }} primary={user.points !== 0 ? user.points : <CommentIcon fontSize="small" />} />
                    </ListItemButton>
                </ListItem>
            ))}
        </div>
    )
};

export default Users;