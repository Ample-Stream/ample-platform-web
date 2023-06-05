import { Inter } from "next/font/google";
import React from "react";
import { Box, Image, Text } from "theme-ui";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
const inter = Inter({ subsets: ["latin"] });
function Footer() {
  return (
    <Box sx={{ width: "100%", background: "#2c2359" }}>
      <Box sx={{ padding: "20px 50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#ccc",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "40px",
              fontSize: "14px",
            }}
            className={inter.className}
          >
            <Text sx={{ cursor: "pointer" }}>Terms and Conditions</Text>
            <Text sx={{ cursor: "pointer" }}>Privacy Policy</Text>
            <Text sx={{ cursor: "pointer" }}>Contact Us</Text>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
              fontSize: "14px",
            }}
            className={inter.className}
          >
            <BsTwitter
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
            <SiDiscord
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
