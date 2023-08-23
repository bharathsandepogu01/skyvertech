"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Logo from "@components/Logo";
import Text from "@components/Text";
import classes from "./styles.module.scss";

function Header() {
  const prevScrollYRef = React.useRef<number>(0);
  const [changeBg, setChangeBg] = React.useState(false);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  React.useEffect(() => {
    function eventCallback(e: Event) {
      const currScrollY = window.scrollY;

      if (currScrollY > prevScrollYRef.current && currScrollY > 100) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }

      prevScrollYRef.current = currScrollY;
    }

    window.addEventListener("scroll", eventCallback);

    return () => {
      window.removeEventListener("scroll", eventCallback);
    };
  }, []);

  const handleHamburgerClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const menuLinks = (
    <>
      <li>
        <Link href={"/about-us"}>
          <Text
            variant="span"
            small
            semiBold
            white={!openMobileMenu && !changeBg}
          >
            About Us
          </Text>
        </Link>
      </li>
      <li>
        <Link href={"/privacy-policy"}>
          <Text
            variant="span"
            small
            semiBold
            white={!openMobileMenu && !changeBg}
          >
            Privacy Policy
          </Text>
        </Link>
      </li>
    </>
  );

  return (
    <header
      className={clsx(
        classes.header,
        (changeBg || openMobileMenu) && classes.headerBackgroundWhite
      )}
    >
      <div className={classes.logoMenuContainer}>
        <Logo whiteText={!openMobileMenu && !changeBg} />
        <ul className={classes.menu} role={"menu"}>
          {menuLinks}
        </ul>
        <div
          className={clsx(
            classes.hamBurger,
            (changeBg || openMobileMenu) && classes.hamBurgerColorChange,
            openMobileMenu && classes.hamBurgerActive
          )}
          role={"button"}
          onClick={handleHamburgerClick}
        >
          <span aria-hidden />
        </div>
      </div>

      {openMobileMenu && <ul className={classes.mobileMenu}>{menuLinks}</ul>}
    </header>
  );
}

export default Header;
