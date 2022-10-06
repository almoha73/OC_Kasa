import React from 'react';

const Tags = ({tag}) => {
    
        return (
            <div className='tag'>
            {tag.map((elt, i)=> (
                <button key={i}>{elt}</button>
            ))}
            </div>
        );
    
}
    


export default Tags;