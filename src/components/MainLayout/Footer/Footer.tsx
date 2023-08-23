import React from "react";
import Text from "@components/Text";
import ContactLogos from "@components/ContactLogos";
import classes from "./styles.module.scss";
import Logo from "@components/Logo";
import Link from "next/link";

const data = {
  copyrightText: "© Copyright 2023 - Skyvertech by Designesia",
  address: `Sed ut perspiciatis unde omnis iste natus error sit 
    voluptatem accusantium doloremque laudantium, totam 
    rem aperiam, eaque ipsa quae ab illo inventore veritatis 
    et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem.`,
  demoLinks: [
    { name: "About Us", link: "/about-us" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ],
  pagesLinks: [
    { name: "About Us", link: "/about-us" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ],
  newsLetter: {
    info: `Signup for our newsletter to get the latest news, updates and special offers in your inbox.`,
  },
};

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.contentContainer}>
        <div>
          <Logo whiteText />
          <Text variant="p" small light white>
            {data.address}
          </Text>
        </div>
        <div>
          <Text variant="h2" bold white>
            Demo
          </Text>
          {data.demoLinks.map((demo) => {
            return (
              <Link key={demo.name} href={demo.link}>
                <Text variant="span" white small light>
                  {demo.name}
                </Text>
              </Link>
            );
          })}
        </div>
        <div>
          <Text variant="h2" bold white>
            Pages
          </Text>
          {data.pagesLinks.map((page) => {
            return (
              <Link key={page.name} href={page.link}>
                <Text variant="span" white small light>
                  {page.name}
                </Text>
              </Link>
            );
          })}
        </div>
        <div>
          <Text variant="h2" bold white>
            Newsletter
          </Text>
          <Text variant="p" white small light>
            {data.newsLetter.info}
          </Text>
        </div>
      </div>
      <div className={classes.copyRightContainer}>
        <Text variant="p" white small>
          {data.copyrightText}
        </Text>
        <ContactLogos />
      </div>
    </footer>
  );
}

export default Footer;
