import React from "react";
import SubItem from './SubItem'

const SubLinks = (props) => {
	const menu = props.data.find((item) => item.name === props.match.params.name);
	console.log(menu);

	return (
		<div className={`sub-links ${menu.name}`}>
			<SubItem subLinks={menu.subLinks} />
		</div>
	);
}

export default SubLinks;