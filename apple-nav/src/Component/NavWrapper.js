import React, { useState } from "react";
import NavList from "../Component/NavList"
import data from "../data";
import { Route } from 'react-router-dom';

const NavWrapper = () => {
    const [appleData] = useState(data);


    return(
        <div>
           <Route path="/" render={() => <NavList links={appleData} />} />
        </div>
    )
}

export default  NavWrapper ;