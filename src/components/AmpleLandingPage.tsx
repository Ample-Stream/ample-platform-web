import React from "react";
import { Box } from "theme-ui";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Banner from "@/components/Banner";
import LaunchPartners from "@/components/LaunchPartners";
import Team from "@/components/Team";
import Investors from "@/components/Investors";
import ContactUs from "@/components/ContactUs";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

function AmpleLandingPage() {
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
      <Banner />
      <Features />
      <Investors />
      <LaunchPartners />
      <ContactUs />
      <Footer />
    </Box>
  );
}

export default AmpleLandingPage;
