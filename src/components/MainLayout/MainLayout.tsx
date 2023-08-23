import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import IMainLayoutProps from "./types";
import classes from "./styles.module.scss";

function MainLayout(props: IMainLayoutProps) {
  return (
    <div role={"application"} className={classes.mainLayout}>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  );
}

export default MainLayout;
