import React from "react";
import { Box } from "theme-ui";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import PrivacyTermsContainer from "@/components/PrivacyTextContainer";

const inter = Inter({ subsets: ["latin"] });

function AmplePrivacyPolicy() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
      }}
      className={inter.className}
    >
      <Header />
      <PrivacyTermsContainer title="Privacy Policy" text="" />
      <Footer />
    </Box>
  );
}

export default AmplePrivacyPolicy;
