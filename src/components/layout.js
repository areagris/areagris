import React from "react";
import { Helmet } from "react-helmet";

import Header from "./header";

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&display=swap" rel="stylesheet" />
    </Helmet>
    <Header />
    <div style={{ overflowX: 'scroll' }}>
      <main>{children}</main>
    </div>
  </div>
);

export default Layout
