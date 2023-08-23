import type { Metadata } from "next";
import MainLayout from "@components/MainLayout";
import HeaderSection from "@components/HeaderSection";
import FeaturesSection from "@components/FeaturesSection/FeaturesSection";

export const metadata: Metadata = {
  title: "Skyvertech",
  description: "Skyvertech a Software as a Service platform",
};

export default function HomePage() {
  return (
    <MainLayout>
      <HeaderSection />
      <FeaturesSection />
    </MainLayout>
  );
}
