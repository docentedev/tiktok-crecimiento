import React from 'react';
import styles from './Users.module.css';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const Users = ({ users }: { users: any[] }) => {
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
                        }} primary={user.points !== 0 && user.points} />
                    </ListItemButton>
                </ListItem>
            ))}
        </div>
    )
};

export default Users;