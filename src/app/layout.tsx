import "@/styles/main.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "畅皓楠",
  description: "畅皓楠的个人主页",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
