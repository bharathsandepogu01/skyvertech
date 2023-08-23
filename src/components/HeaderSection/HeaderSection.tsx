"use client";

import React from "react";
import Image from "next/image";
import Text from "@components/Text";
import classes from "./styles.module.scss";

const data = {
  header: "Start your amazing day with bluetec",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna,`,
  downloadPlayStoreImagePath: `/images/download-playstore.png`,
  mobileMockUpImagePath: `/images/mobile-mockup.png`,
  playStoreUrl: "",
};

function HeaderSection() {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const imageRef = React.useRef<HTMLDivElement | null>(null);

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
          {data.header}
        </Text>
        <Text variant="p" semiBold white>
          {data.content}
        </Text>
        <a
          href={data.playStoreUrl}
          target="_blank"
          aria-label={`click to download wallpe app`}
        >
          <Image
            src={data.downloadPlayStoreImagePath}
            alt={"Download app from play store"}
            width={180}
            height={55}
          />
        </a>
      </div>
      <div className={classes.imageContainer} ref={imageRef}>
        <div className={classes.imageWrapper}>
          <Image
            alt="Wallpe Mobile Mockup"
            src={data.mobileMockUpImagePath}
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
