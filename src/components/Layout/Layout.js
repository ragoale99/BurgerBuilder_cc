import React from "react";
import Aux from "../../hoc/Auxiliary";
import "./Layout.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, sidebar,backdrop</div>
    <main className="content">{props.children}</main>
  </Aux>
);

export default Layout;
