import React from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Aux>
);

export default Layout;
