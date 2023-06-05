import React from "react";
import {
  BsArrow90DegRight,
  BsArrowBarRight,
  BsArrowRight,
  BsTwitter,
} from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { Box, Button, Image, Text } from "theme-ui";
import { Kanit } from "next/font/google";
import { keyframes } from "@emotion/react";

const kanit = Kanit({ weight: "700", subsets: ["latin"] });
const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

const wave = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(-5px)" },
});

function Banner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "column", "column", "row"],
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
        padding: ["10px", "10px", "10px", "40px 10px 90px 10px"],
        background:
          "linear-gradient(135deg,  rgba(121,39,255,0.08) 0%,rgba(155,45,242,0.08) 23.44%,rgba(243,194,255,0.09) 47.92%,rgba(222,227,255,0.25) 74.48%,rgba(140,200,255,0.2) 100%)",
        width: "100vw",
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
          sx={{ opacity: "0.1", filter: "blur(4px)" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: ["100%", "100%", "100%", "60%"],
          alignItems: "flex-start",
          borderRadius: "16px",
          background: "rgba(121,39,255,0.1)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: ["10px", "10px", "10px", "100px 30px"],
          animation: `${fadeIn} 2s `,
        }}
      >
        <Text
          sx={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: ["48px", "52px", "48px", "60px"],
            background:
              "linear-gradient(104.1deg, #7735E8 32.26%, #BA2DF0 80.02%, #C62CF1 88.17%)",
            backgroundClip: "text",
            letterSpacing: "0.02em",
            textFillColor: "transparent",
            lineHeight: "3.5rem",
          }}
          className={kanit.className}
        >
          Unlock the Future of Entertainment
        </Text>
        <Text
          sx={{
            color: "#5a6893",
            fontWeight: "400",
            fontSize: ["20px", "20px", "20px", "24px"],
            letterSpacing: "0.02em",
            lineHeight: "2rem",
          }}
        >
          Embrace the Next Wave of Entertainment: Revolutionizing Streaming,
          Distribution, and Financing for Film, Show, and Music Productions with
          Web3 Innovation
        </Text>

        <Button
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
            backgroundColor: "#7735E8",
            borderRadius: "16px",
            fontSize: ["18px", "18px", "18px", "20px"],
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#7310E0",
            },
            zIndex: 3,
          }}
        >
          Visit the Platform
          <BsArrowRight />
        </Button>
      </Box>
      <Box
        sx={{
          animation: `${wave} 1s ease-in-out infinite alternate`,
          marginTop: "20px",
          padding: "20px",
          height: ["450px", "450px", "450px", "500px"],
        }}
      >
        <img
          src="/images/ample-hero-img.jpg"
          style={{
            height: "100%",
            borderRadius: "16px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px inset",
          }}
        />
      </Box>
    </Box>
  );
}

export default Banner;
