import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
height:100px;
width:100px;
margin-left:29px;
`
const Div = styled.div`
display: flex;
flex-direction: row;
border:10px solid #C0C0C0;
background-color:#C0C0C0;
height:240px;
`     
const Li = styled.li`
list-style-type: none;
margin-left:30px;
font-size:20px;
`
const Item = styled.div`
margin-left:10px;
`




const SubItems = (props) => {
	return (
		<Div className="sub-item">
			{props.subLinks.map((subItem) => (
                <div>
                    <Item>
					<Img src={subItem.img} alt={subItem.name} />
					<Li>{subItem.name}</Li>
                    </Item>
                </div>
			))}
		</Div>
	);
};

export default SubItems;

