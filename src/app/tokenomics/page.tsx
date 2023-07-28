"use client";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/themes/theme";
import AmpleLandingPage from "@/components/AmpleLandingPage";
import AmpleTokenomics from "@/components/AmpleTokenomics";

export default function privacyPolicy() {
  return (
    <ThemeProvider theme={theme}>
      <AmpleTokenomics />
    </ThemeProvider>
  );
}
