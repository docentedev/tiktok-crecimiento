import { User } from "./App";

function removeDuplicateUsers(users: User[]) {
    const uniqueUsers: { [key: string]: User } = {};
    users.forEach(user => {
        if (!uniqueUsers[user.username]) {
            uniqueUsers[user.username] = user;
        } else {
            uniqueUsers[user.username].points += user.points;
        }
    });

    return Object.values(uniqueUsers);
}

export const getTopUsers = (users: User[]) => {
    // Crear un objeto para almacenar los puntos por usuario
    const pointsByUser: { [key: string]: number } = {};

    // Recorrer el array de usuarios y sumar los puntos para cada usuario
    users.forEach(user => {
        if (pointsByUser[user.username]) {
            pointsByUser[user.username] += user.points;
        } else {
            pointsByUser[user.username] = user.points;
        }
    });
    // Convertir el objeto a un array de objetos con username y points
    const userPointsArray = Object
        .entries(pointsByUser)
        .map(([username, points]) => ({ username, points, color: '' } as User));
    // Ordenar el array por puntos de forma descendente
    const sortedUserPoints = userPointsArray
        .sort((a, b) => b.points - a.points);
    // Tomar los primeros 3 usuarios (los 3 con más puntos)
    const top3Users = sortedUserPoints
        .slice(0, 3);
    return removeDuplicateUsers(top3Users);
}

export const getData = () => {
    return JSON.parse(localStorage.getItem('tiktok_crecimiento_users') || '[]');
}

export const setData = (users: User[]) => {
    localStorage.setItem('tiktok_crecimiento_users', JSON.stringify(users));
}

export const userVoid = {
    username: '',
    points: 0,
    color: '',
}