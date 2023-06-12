import React from "react";
import { Box } from "theme-ui";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import TermsTextContainer from "@/components/TermsTextContainer";

const inter = Inter({ subsets: ["latin"] });

function AmpleTerms() {
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
      <TermsTextContainer title="Terms & Conditions" text="" />
      <Footer />
    </Box>
  );
}

export default AmpleTerms;
