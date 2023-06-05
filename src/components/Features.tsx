import { keyframes } from "@emotion/react";
import { Kanit, Roboto } from "next/font/google";
import React from "react";
import { Box, Image, Text } from "theme-ui";

const kanit = Kanit({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const wave = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(-5px)" },
});

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
function Features() {
  const features = [
    {
      title: "Streaming",
      subTitle: "On-Chain Streaming",
      text: " Experience On-Chain Streaming with Ample's Platform. Support your favorite creators and owners directly, knowing that each stream contributes to their success.",
      image: "/images/feature-screenshot-3.png",
    },
    {
      title: "Distribution",
      subTitle: "Creators and Consumers working together",
      text: "Elevate Your Content with AMPLE. Upload Top-Tier Content, Mint NFTs, and Automatically Reach the Streaming Platform and NFT Marketplace.",
      image: "/images/feature-screenshot-2.png",
    },
    {
      title: "Purchasing and Financing",
      subTitle: "Simplified Payouts and Ownership with Smart Contracts",
      text: "Real-Time Earnings and Transparency: With on-chain autopay and smart contracts, creators and owners receive instant payouts, while record labels, production companies, fans, and creators all reap the financial and legal benefits of our transparent distribution network and dashboard.",
      image: "/images/feature-screenshot-1.png",
    },
    {
      title: "Create your Portfolio",
      subTitle: "Let People follow the work you Create or Finance",
      text: "Build Your Following and Amplify Your Collections: Showcase Your Portfolio, NFTs for Sale, and Supported Projects on Your Community Profile. Create a Network Effect for Your Name or Brand and Connect with a Thriving Community.",
      image: "/images/feature-screenshot-4.png",
    },
  ];

  return (
    <Box
      sx={{
        padding: "30px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0px",
        animation: `${fadeIn} 2s `,
      }}
    >
      {features.map((feature, i) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: [
              "column",
              "column",
              "column",
              i % 2 === 0 ? "row" : "row-reverse",
            ],
            gap: "50px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              zIndex: 0,
              position: "absolute",
            }}
          >
            <Image
              src="/images/dapp-screenshot.png"
              sx={{ opacity: "0.06", filter: "blur(8px)" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: ["90vw", "90vw", "90vw", "60%"],
              flex: 1,
              background: "rgba(121,39,255,0.1)",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              borderRadius: "16px",
              padding: "20px",
              animation: `${wave} 2s ease-in-out infinite alternate`,
            }}
          >
            <Text
              sx={{
                fontSize: ["28px", "28px", "28px", "40px"],
                fontWeight: "600",
                background:
                  "linear-gradient(104.1deg, #7735E8 32.26%, #BA2DF0 80.02%, #C62CF1 88.17%)",
                backgroundClip: "text",
                letterSpacing: "0.02em",
                textFillColor: "transparent",
              }}
              className={kanit.className}
            >
              {feature.title}
            </Text>
            <Text
              sx={{
                color: "#5a6893",
                fontWeight: "500",
                fontSize: "22px",
                letterSpacing: "0.02em",
                lineHeight: "2rem",
              }}
            >
              {feature.subTitle}
            </Text>
            <Text
              sx={{
                color: "#8128c5",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "0.05em",
                lineHeight: "1.6rem",
                width: ["fit-content", "fit-content", "fit-content", "500px"],
                textAlign: "justify",
                wordBreak: "keep-all",
              }}
              className={roboto.className}
            >
              {feature.text}
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: ["400px", "450px", "450px", "500px"],
              //   animation: `${wave} 1s ease-in-out infinite alternate`,
            }}
          >
            <img src={feature.image} style={{ height: "100%" }} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Features;
