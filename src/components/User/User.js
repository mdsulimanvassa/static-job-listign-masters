import React from 'react';
import './User.css';

const User = (props) => {
    console.log(props.user);
   const { logo, position, company,postedAt, contract,
          location, role, level, languages } = props.user;
    return (
        <div className='container'>
           <div className="box">
                <div className="row-revesr">
                    <div className="half-width">
                       <img src={require(`../../images/${logo}`)} alt="" />
                    </div>
                    <div className="half-width">
                      <h3>{company}</h3>
                      <h1>{position}</h1>
                      <p>{postedAt}</p>
                      <p>{contract}</p>
                      <p>{location}</p>
                    </div>
                </div>
                <div className="sidever">
                   <h3>{role}</h3>
                   <h3>{level}</h3>
                   <h3>{languages[0]}</h3>
                   <h3>{languages[1]}</h3>
                   <h3>{languages[2]}</h3>
                </div>
           </div>
        </div>
    );
};

export default User;