import React, { useEffect } from "react";
import { Box, Text } from "theme-ui";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import PrivacyTermsContainer from "@/components/PrivacyTextContainer";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

function AmpleTokenomics() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://ample.docsend.com/view/v9bgdsp9t5xzmci4");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className={inter.className}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text sx={{fontSize:"20px"}}>Redirecting to Ample's Tokenomics document.</Text>
      </Box>
      <Footer />
    </Box>
  );
}

export default AmpleTokenomics;
