import React, { useState } from 'react';
import './App.css';
import Tops from './components/Tops';
import Users from './components/Users';
import Forms from './components/Form';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [users, setUsers] = useState([{
    username: 'claudiodeviaje',
    points: 1550,
    color: '',
  }, {
    username: 'jose_maldo_guitar',
    points: 1200,
    color: '',
  }, {
    username: 'carlosdsassa',
    points: 890,
    color: '',
  }, {
    username: 'marianiits_',
    points: 50,
    color: '',
  }, {
    username: 'marianiits_',
    points: 50,
    color: '',
  }]);

  const handleAddUser = (user: any) => {
    setUsers([{
      ...user,
      color: '',
    }, ...users])
  }
  const getTopUsers = () => {
    const sortedUsers = [...users].sort((a, b) => b.points - a.points);
    const top3Users = sortedUsers.slice(0, 3);
    const totalPoints = top3Users.reduce((sum, user) => sum + user.points, 0);
    const result = {
      topUsers: top3Users,
      totalPoints: totalPoints,
      lastUser: { ...users[0] },
    };
    return result;
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Tops users={getTopUsers()} />
        <Users users={users} />
        <Forms onAddUser={handleAddUser} />
      </div>
    </ThemeProvider>
  );
}

export default App;
