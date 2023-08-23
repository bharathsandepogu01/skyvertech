import React from "react";
import FaceBookIcon from "@public/icons/facebook.svg";
import EmailIcon from "@public/icons/email.svg";
import TwitterIcon from "@public/icons/twitter.svg";
import classes from "./styles.module.scss";

const contactInfoArr = [
  {
    id: "facebook",
    icon: FaceBookIcon,
    url: "https://github.com/bharathsandepogu01",
  },
  {
    id: "twitter",
    icon: EmailIcon,
    url: "https://www.linkedin.com/in/bharath-sandepogu-01/",
  },
  {
    id: "mail",
    icon: TwitterIcon,
    url: "mailto:bharathsandepogu01@gmail.com",
  },
];

function ContactLogos() {
  return (
    <div className={classes.contactLogosContainer}>
      {contactInfoArr.map((item) => {
        const { icon: Icon } = item;
        return (
          <a
            href={item.url}
            target="_blank"
            key={item.id}
            aria-label={`click to connect Skyvertech's ${item.id} account`}
          >
            <div className={classes.iconContainer}>
              <Icon className={classes.logoIcon} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ContactLogos;
