import React from "react";
import { Box, Image, Text } from "theme-ui";
import { BsTwitter } from "react-icons/bs";

import { SiDiscord } from "react-icons/si";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "4rem",
        padding: "10px 30px",
        backgroundColor: "#2c2359",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px -20px 1000px 5px blue ",
        borderBottom: "1px solid #2c2359",
        zIndex: 2,
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image src="/images/logo.png" sx={{ height: "2rem" }} />
        </Box>
      </Link>

      <Box
        sx={{
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: ["20px", "20px", "20px", "30px"],
            fontSize: "14px",
          }}
          className={inter.className}
        >
          <Link href="https://twitter.com/AMPLE_Stream">
            <BsTwitter
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://discord.gg/8yUwnapFmd">
            <SiDiscord
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link
            href="https://ample.docsend.com/view/ddfv59hrnw3fgnby"
            target="blank"
          >
            <Text
              sx={{
                color: "rgba(240,240,240,1)",
                fontWeight: "700",
                fontSize: "16px",
                letterSpacing: "0.04em",
                lineHeight: "2rem",
              }}
            >
              Pitch Deck
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
