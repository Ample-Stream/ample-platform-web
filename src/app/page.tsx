"use client";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/themes/theme";
import AmpleLandingPage from "@/components/AmpleLandingPage";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <AmpleLandingPage />
    </ThemeProvider>
  );
}
