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
        padding: ["10px", "10px", "10px", "40px 10px 40px 10px"],
        width: "100vw",
        backgroundColor: "#0d1223",
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          position: "absolute",
          height: ["100%", "100%", "100%", "100%"],
        }}
      >
        <Image
          src="/images/gradient-dark.png"
          sx={{ opacity: "1", height: "100%" }}
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
          background:
            "linear-gradient(135deg, hsla(0, 96%, 69%, 0.2) 0%, hsla(225, 84%, 64%, 0.2) 100%)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: ["10px", "10px", "10px", "100px 30px"],
          animation: `${fadeIn} 2s `,
          marginTop: "20px",
        }}
      >
        <Text
          sx={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: ["48px", "52px", "48px", "60px"],
            background: "#FFFFFF",
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
            color: "rgba(240,240,240,1)",
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
            background:
              "linear-gradient(135deg, hsla(0, 96%, 69%, 1) 0%, hsla(225, 84%, 64%, 1) 100%)",
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
          alt="banner-image"
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
