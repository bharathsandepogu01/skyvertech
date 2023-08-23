import React from "react";
import Text from "@components/Text";
import classes from "./styles.module.scss";
import Link from "next/link";
import ILogoProps from "./types";

function Logo(props: ILogoProps) {
  return (
    <div className={classes.logo}>
      <Link href={"/"}>
        <Text variant={"span"} bold extraMedium white={props.whiteText}>
          Skyvertech
        </Text>
      </Link>
    </div>
  );
}

export default Logo;
