import React from "react";
import classes from "./styles.module.scss";
import Text from "@components/Text";
import Image from "next/image";

const data = {
  header: "Screenshots",
  imagePaths: [
    "/images/screenshots/1.jpg",
    "/images/screenshots/2.jpg",
    "/images/screenshots/3.jpg",
    "/images/screenshots/4.jpg",
    "/images/screenshots/5.jpg",
    "/images/screenshots/6.jpg",
    "/images/screenshots/7.jpg",
    "/images/screenshots/8.jpg",
  ],
};

function ScreenShotsSection() {
  return (
    <section className={classes.screenshots}>
      <Text variant="h2" large bold white>
        {data.header}
      </Text>
      <div className={classes.imagesContainer}>
        {data.imagePaths.map((imagePath, index) => {
          return (
            <Image
              src={imagePath}
              alt={"app screenshot"}
              key={index}
              width={350}
              height={550}
              className={classes.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ScreenShotsSection;
