import React from "react";
import type { Metadata } from "next";
import AboutUs from "@components/AboutUs";
import MainLayout from "@components/MainLayout";

export const metadata: Metadata = {
  title: "About Us | Skyvertech",
  description: "Skyvertech a Software as a Service platform",
};

export default function AboutUsPage() {
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
}
