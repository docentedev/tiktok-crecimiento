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
    // Crear un objeto para almacenar los puntos por usuario
    const pointsByUser: { [key: string]: number} = {};

    // Recorrer el array de usuarios y sumar los puntos para cada usuario
    users.forEach(user => {
      if (pointsByUser[user.username]) {
        pointsByUser[user.username] += user.points;
      } else {
        pointsByUser[user.username] = user.points;
      }
    });
    // Convertir el objeto a un array de objetos con username y points
    const userPointsArray = Object.entries(pointsByUser).map(([username, points]) => ({ username, points }));
    // Ordenar el array por puntos de forma descendente
    const sortedUserPoints = userPointsArray.sort((a, b) => b.points - a.points);
    // Tomar los primeros 3 usuarios (los 3 con más puntos)
    const top3Users = sortedUserPoints.slice(0, 3);
    const result = {
      topUsers: top3Users,
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
