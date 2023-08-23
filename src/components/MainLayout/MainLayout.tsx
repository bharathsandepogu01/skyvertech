import React from "react";
import classes from "./styles.module.scss";

function MainLayout(): React.JSX.Element {
  return (
    <div role={"application"} className={classes.mainLayout}>
      <header></header>
      <main>
        <h1>Skyvertech</h1>
      </main>
      <footer></footer>
    </div>
  );
}

export default MainLayout;
