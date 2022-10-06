import React from 'react';

const OneCard = ({data}) => {
    
    return (
        <li className='oneCard' key={data.id}>
            <img src={data.cover} alt={data.title} />
            <p>{data.title}</p>
            <div className="dark"></div>
        </li>
    );
};

export default OneCard;