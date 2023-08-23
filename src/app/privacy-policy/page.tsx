import React from "react";
import type { Metadata } from "next";
import MainLayout from "@components/MainLayout";
import PrivacyPolicy from "@components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Skyvertech",
  description: "Skyvertech Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <PrivacyPolicy />
    </MainLayout>
  );
}
