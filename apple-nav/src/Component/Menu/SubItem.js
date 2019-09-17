import React from 'react';
 
const SubItem = (props) => {
    return (
        <div>
            {props.subLinks.map((_subItem) => (
            <div>
                <img src={subItem.img} alt={subItem.name}/>
                <h3>{subItem.name}</h3>
            </div>
            ))}
        </div>
    )
}

