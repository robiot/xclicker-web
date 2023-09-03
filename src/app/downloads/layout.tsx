import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Test it - XClicker",
};

const DownloadsLayout = async ({ children }: { children: ReactNode }) => {
  return children;
};

export default DownloadsLayout;
