import React, { useState } from 'react';
import styles from './App.module.css';
import Tops from './components/Tops';
import Users from './components/Users';
import Forms from './components/Form';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getData, getTopUsers, setData, userVoid } from './utils';
import Actions from './components/Actions';

export interface User {
  username: string;
  points: number;
  color: string;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [lastUser, setLastUser] = useState<User>(userVoid);
  const [users, setUsers] = useState<User[]>(getData());

  const handleAddUser = (user: any) => {
    if (user.points > 0) setLastUser({
      ...user,
      color: '',
    });
    const newUsers = [{ ...user, color: '' }, ...users];
    setUsers(newUsers);
    setData(newUsers);
  }

  const handleDeleteData = () => {
    setUsers([]);
    setLastUser(userVoid);
    setData([]);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.app}>
        <Tops topUsers={getTopUsers(users)} lastUser={lastUser} />
        <Users users={users} />
        <Forms onAddUser={handleAddUser} />
        <Actions onDelete={handleDeleteData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
