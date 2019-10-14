import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 100px;
  border: 10px solid black;
`;
const H3 = styled.h3`
  padding-left: 100px;
  color: white;
  text-decoration: none;
  margin-top: 40px;
`;
const Img = styled.img`
 margin-top:15px;
 height:50px;
 width:50px;
 margin-left:10px;

`;

const NavItem = props => {
  return (
    <div>
      <Div className="nav-item">
        <Img src="https://image.flaticon.com/icons/svg/179/179309.svg" />
        {props.links.map(item => (
          <Link className="Link" to={`/sub-links/${item.name}`}>
            <H3>{item.name}</H3>
          </Link>
        ))}
      </Div>
    </div>
  );
};

export default NavItem;
