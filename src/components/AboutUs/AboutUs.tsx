import React from "react";
import Text from "@components/Text";
import classes from "./styles.module.scss";

function AboutUs() {
  return (
    <section className={classes.aboutUs}>
      <Text variant="h1" extraMedium bold>
        About Us
      </Text>

      <Text variant="p" small light>
        {`Welcome to Skyvertech! We are a leading SaaS company dedicated to providing innovative solutions for our customers.`}
      </Text>

      <Text variant="p" small light>
        {`At Skyvertech, our mission is to empower businesses with cutting-edge software that simplifies complex tasks and enhances productivity.`}
      </Text>

      <Text variant="h2" bold>
        Our Values
      </Text>

      <Text variant="p" small light>
        {`We value integrity, innovation, and customer satisfaction. Our team is committed to delivering the best possible products and services to our clients.`}
      </Text>

      <Text variant="h2" bold>
        Contact Us
      </Text>

      <Text variant="p" small light>
        {`If you'd like to learn more about Skyvertech, please feel free to contact us.`}
      </Text>
    </section>
  );
}

export default AboutUs;
