import "@styles/globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skyvertech",
  description: "Skyvertech a Software as a Service platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
