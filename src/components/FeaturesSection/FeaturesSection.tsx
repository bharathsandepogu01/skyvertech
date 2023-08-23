"use client";

import React from "react";
import SearchIcon from "@public/icons/search.svg";
import classes from "./styles.module.scss";
import Text from "@components/Text";

const data = [
  {
    name: "Website Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: SearchIcon,
  },
  {
    name: "Email Marketing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: SearchIcon,
  },
  {
    name: "Digital Analytics",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: SearchIcon,
  },
  {
    name: "Visual Editor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: SearchIcon,
  },
  {
    name: "Backup & Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: SearchIcon,
  },
  {
    name: "IT Consultancy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: SearchIcon,
  },
];

function FeaturesSection() {
  const featureRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );
  const featureObserverRefs = React.useRef<{
    [key: string]: IntersectionObserver;
  }>({});

  React.useEffect(() => {
    data.forEach((feature) => {
      const featureRef = featureRefs.current[feature.name];
      if (!featureRef) return;
      const obsOptions = { root: null, threshold: 0 };
      const obsCallback = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            featureRef.classList.add(classes.showFeatureCard);
          }, 300);
        }
      };
      const observer = new IntersectionObserver(obsCallback, obsOptions);
      observer.observe(featureRef);
      featureObserverRefs.current[feature.name] = observer;
    });
    return () => {
      data.forEach((feature) => {
        featureObserverRefs.current[feature.name].disconnect();
      });
    };
  }, []);

  return (
    <section className={classes.featureSection}>
      {data.map((feature) => {
        const { icon: Icon } = feature;
        return (
          <div
            key={feature.name}
            className={classes.featureCard}
            ref={(el) => (featureRefs.current[feature.name] = el)}
          >
            <div className={classes.iconContainer}>
              <Icon className={classes.icon} />
            </div>
            <div className={classes.content}>
              <Text variant={"h2"} bold>
                {feature.name}
              </Text>
              <Text variant={"p"} secondaryText small light>
                {feature.content}
              </Text>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default FeaturesSection;
