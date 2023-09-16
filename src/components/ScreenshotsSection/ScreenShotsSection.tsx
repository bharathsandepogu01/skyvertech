import React from "react";
import classes from "./styles.module.scss";
import Text from "@components/Text";
import Image from "next/image";

const data = {
  header: "Screenshots",
  imagePaths: [
    "/images/screenshots/s1.jpg",
    "/images/screenshots/s2.jpg",
    "/images/screenshots/s3.jpg",
    "/images/screenshots/s4.jpg",
    "/images/screenshots/s5.jpg",
    "/images/screenshots/s6.jpg",
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
