"use client";

import React from "react";
import Image from "next/image";
import Text from "@components/Text";
import classes from "./styles.module.scss";

function HeaderSection() {
  const contentRef = React.useRef<HTMLDivElement |null>(null);
  const imageRef = React.useRef<HTMLDivElement |null>(null);

  React.useEffect(() => {
    contentRef?.current?.classList?.add(classes.showContentContainer);
  }, []);

  const handleImageLoadingComplete = () => {
    imageRef?.current?.classList?.add(classes.showImageContainer);
  };

  return (
    <section className={classes.headerSection}>
      <div className={classes.contentContainer} ref={contentRef}>
        <Text variant="h1" extraLarge bold white>
          Start your amazing day with bluetec
        </Text>
        <Text variant="p" semiBold white>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna,
        </Text>
        <Image
          src={"/images/download-playstore.png"}
          alt={"Download app from play store"}
          width={180}
          height={55}
        />
      </div>
      <div className={classes.imageContainer} ref={imageRef}>
        <div className={classes.imageWrapper}>
          <Image
            alt="Wallpe Mobile Mockup"
            src={"/images/mobile-mockup.png"}
            fill
            loading={"lazy"}
            onLoadingComplete={handleImageLoadingComplete}
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
