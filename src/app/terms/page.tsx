"use client";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/themes/theme";
import AmpleLandingPage from "@/components/AmpleLandingPage";
import AmpleTerms from "@/components/AmpleTerms";

export default function Terms() {
  return (
    <ThemeProvider theme={theme}>
      <AmpleTerms />
    </ThemeProvider>
  );
}
