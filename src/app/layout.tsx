import type { Metadata } from "next";
import "./globals.css";
import { OnboardingProvider } from "./contexts/OnboardingContext";
import OnboardingHeader from "./components/OnboardingHeader";

export const metadata: Metadata = {
  title: "Noor Kids - Character Building Program",
  description: "A personalized journey to raise a confident, kind Muslim child.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <OnboardingProvider>
          <OnboardingHeader />
          {children}
        </OnboardingProvider>
      </body>
    </html>
  );
}
