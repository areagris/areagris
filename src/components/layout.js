import React from "react";
import { Helmet } from "react-helmet";

import Header from "./header";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&display=swap" rel="stylesheet" />
    </Helmet>
    <Header />
    <div className="relative">
      <main>{children}</main>
    </div>
  </>
);

export default Layout
