import React from "react";
import classes from "./styles.module.scss";
import IMainProps from "./types";

function Main(props: IMainProps) {
  return <main className={classes.main}>{props.children}</main>;
}

export default Main;
