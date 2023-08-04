import React, { useState } from 'react';
import styles from './Form.module.css'
import { Grid, TextField } from '@mui/material';

const Forms = ({ onAddUser }: any) => {
    const [username, setUsername] = useState('');
    const [points, setPoints] = useState(0);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onAddUser({
            username,
            points,
        })
        setUsername('');
        setPoints(0);
    }

    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            <div>
                <TextField value={username} onChange={({ target }) => setUsername(target.value)} fullWidth margin="dense" id="username" label="Usuario" variant="outlined" onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        handleSubmit(ev);
                    }
                }} />
            </div>
            <div>
                <TextField type='number' value={points} onChange={({ target }) => setPoints(Number(target.value || '0'))} fullWidth margin="dense" id="points" label="Puntos" variant="outlined" onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        handleSubmit(ev);
                    }
                }} />
            </div>
        </form>
    )
};

export default Forms;