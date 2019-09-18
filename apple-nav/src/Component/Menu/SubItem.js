import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
height:100px;
width:100px;
`
const Div = styled.div`
display: flex;
flex-direction: row;
 
`     


import { Link } from 'react-router-dom';

const SubItems = (props) => {
	return (
		<Div className="sub-item">
			{props.subLinks.map((subItem) => (
                <div>
				<Link to="/" key={subItem.id}>
					<Img src={subItem.img} alt={subItem.name} />
					<h3>{subItem.name}</h3>
				</Link>
                </div>
			))}
		</Div>
	);
};

export default SubItems;

