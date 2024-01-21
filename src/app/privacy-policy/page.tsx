"use client";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/themes/theme";
import AmplePrivacyPolicy from "@/components/AmplePrivacyPolicy";

export default function privacyPolicy() {
  return (
    <ThemeProvider theme={theme}>
      <AmplePrivacyPolicy />
    </ThemeProvider>
  );
}
