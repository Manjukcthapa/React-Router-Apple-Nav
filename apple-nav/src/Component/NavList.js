import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: green;
 
` 
const H2 = styled.h2`
text-decoration: none;
padding-left:100px;


`




const NavItem = (props) => {
	return (
		<Div className="nav-item">
			{props.links.map((item) => (
				<Link  className ="Link" to={`/sub-links/${item.name}`}>
					<H2>{item.name}</H2>
				</Link>
			))}
		</Div>
	);
};

export default NavItem;