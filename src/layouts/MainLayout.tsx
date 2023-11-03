import Footer from "containers/Footer";
import Header from "containers/Header";
import React, { FC } from "react";

const MainLayout: FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
