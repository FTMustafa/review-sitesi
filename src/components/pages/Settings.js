import './Settings.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Settings() {
    const Users = () => {
        const [users, setUsers] = useState([]);

        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/users");
                console.log(res.data); // `res` yerine `res.data` kullanmak daha iyi bir pratik
                setUsers(res.data); // Verileri state'e kaydet
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };

        useEffect(() => {
            fetchAllBooks();
        }, []); // Boş bağımlılık dizisiyle yalnızca bir kez çalışır
    };

    return (
        <div className='settings'>
            <h1>Ayarlar Sayfası</h1>
            <Users />
        </div>
    );
}

export default Settings;
