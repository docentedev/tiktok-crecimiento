import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './Form.module.css'
import { TextField, TextFieldProps } from '@mui/material';

const Forms = ({ onAddUser }: any) => {
    const [username, setUsername] = useState('');
    const [points, setPoints] = useState(0);
    const inputRef  = useRef<any>();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (username === '') return;
        onAddUser({
            username,
            points,
        })
        setUsername('');
        setPoints(0);
        if (inputRef.current) inputRef.current.focus();
    }

    const handleUsernameChange = ({ target }: ChangeEvent<HTMLInputElement>) => setUsername(target.value)
    const handlePointsChange = ({ target }: ChangeEvent<HTMLInputElement>) => setPoints(Number(target.value || '0'))

    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            <div>
                <TextField
                    inputRef={inputRef}
                    value={username}
                    onChange={handleUsernameChange}
                    fullWidth
                    margin="dense"
                    id="username"
                    label="Usuario"
                    variant="outlined"
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') handleSubmit(ev);
                    }} />
            </div>
            <div>
                <TextField
                    type='number'
                    value={points}
                    onChange={handlePointsChange}
                    fullWidth
                    margin="dense"
                    id="points"
                    label="Puntos"
                    variant="outlined"
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') handleSubmit(ev);
                    }} />
            </div>
        </form>
    )
};

export default Forms;