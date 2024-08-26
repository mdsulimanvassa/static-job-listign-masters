import React, { useState } from 'react';
import './Home.css';
import User from '../User/User';
import fakeData from './../../fakeData/data.json'

const Home = () => {
    const [user, setUser] = useState(fakeData);
    return (
        <div className='background'>
            {
                user.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Home;