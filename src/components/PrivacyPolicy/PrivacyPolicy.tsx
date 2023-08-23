import React from "react";
import Text from "@components/Text";
import classes from "./styles.module.scss";

function PrivacyPolicy() {
  return (
    <section className={classes.privacyPolicy}>
      <Text variant="h1" extraMedium bold>
        Privacy Policy
      </Text>

      <Text variant="p" small light>
        Last updated: [Date]
      </Text>

      <Text variant="p" small light>
        {`Your Company Name ("us", "we", or "our") operates [your website URL]
        (the "Site"). This page informs you of our policies regarding the
        collection, use, and disclosure of Personal Information we receive from
        users of the Site.`}
      </Text>

      <Text variant="h2" bold>
        Information Collection And Use
      </Text>

      <Text variant="p" small light>
        {`While using our Site, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you. Personally identifiable information may include, but is
        not limited to your name ("Personal Information").`}
      </Text>

      <Text variant="h2" bold>
        Log Data
      </Text>

      <Text variant="p" small light>
        {`Like many site operators, we collect information that your browser sends
        whenever you visit our Site ("Log Data"). This Log Data may include
        information such as your computer's Internet Protocol ("IP") address,
        browser type, browser version, the pages of our Site that you visit, the
        time and date of your visit, the time spent on those pages, and other
        statistics.`}
      </Text>

      <Text variant="h2" bold>
        Cookies
      </Text>

      <Text variant="p" small light>
        {`Cookies are files with a small amount of data, which may include an
        anonymous unique identifier. Cookies are sent to your browser from a web
        site and stored on your computer's hard drive.`}
      </Text>

      <Text variant="h2" bold>
        Security
      </Text>

      <Text variant="p" small light>
        {`The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security.`}
      </Text>

      <Text variant="h2" bold>
        Changes To This Privacy Policy
      </Text>

      <Text variant="p" small light>
        {`This Privacy Policy is effective as of [Date] and will remain in effect
        except with respect to any changes in its provisions in the future,
        which will be in effect immediately after being posted on this page.`}
      </Text>

      <Text variant="h2" bold>
        Contact Us
      </Text>

      <Text variant="p" small light>
        {`If you have any questions about this Privacy Policy, please contact us.`}
      </Text>
    </section>
  );
}

export default PrivacyPolicy;
