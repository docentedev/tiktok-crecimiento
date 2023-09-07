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

const getLastUser = () => {
  try {
    const lastUser = localStorage.getItem('tiktok_crecimiento_user_last');
    if (lastUser) return JSON.parse(lastUser);
    return userVoid
  } catch (error) {
    return userVoid;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [lastUser, setLastUser] = useState<User>(getLastUser());
  const [users, setUsers] = useState<User[]>(getData());

  const handleAddUser = (user: any) => {
    if (user.points > 0) {
      const recorderLastUser = {
        ...user,
        color: '',
      };
      setLastUser(recorderLastUser);
      localStorage.setItem('tiktok_crecimiento_user_last', JSON.stringify(recorderLastUser));
    }
    const newUsers = [{ ...user, color: '' }, ...users];
    setUsers(newUsers);
    setData(newUsers);
  }

  const handleDeleteData = () => {
    setUsers([]);
    setLastUser(userVoid);
    setData([]);
    localStorage.clear();
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
