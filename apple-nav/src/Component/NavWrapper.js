import React, { useState } from "react";
import NavList from "../Component/NavList";
import SubLinks from "../Component/Menu/Sublinks";
import data from "../data";
import { Route } from "react-router-dom";

const NavWrapper = () => {
  const [appleData] = useState(data);

  return (
    <div>
      <Route path="/" render={() => <NavList links={appleData} />} />
      <Route
        exact
        path="/sub-links/:name"
        render={props => <SubLinks {...props} data={appleData} />}
      />
    </div>
  );
};

export default NavWrapper;
