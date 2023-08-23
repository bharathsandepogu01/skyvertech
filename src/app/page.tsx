import type { Metadata } from "next";
import MainLayout from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Skyvertech",
  description: "Skyvertech a Software as a Service platform",
};

export default function HomePage() {
  return <MainLayout></MainLayout>;
}
