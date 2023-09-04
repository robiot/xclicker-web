import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CPS test - XClicker",
  description: "Mouse click speed test.",
};

const TestLayout = async ({ children }: { children: ReactNode }) => {
  return children;
};

export default TestLayout;
