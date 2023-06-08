import React from "react";
import { Box, Image, Text } from "theme-ui";

function Investors() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "column", "column", "column"],
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        padding: "0px 10px 90px 10px",
        backgroundColor: "#131321",
        width: "100%",
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          position: "absolute",
        }}
      >
        {/* <Image
          src="/images/dapp-screenshot.png"
          sx={{ opacity: "0.1", filter: "blur(3px)" }}
        /> */}
      </Box>
      <Text
        sx={{
          letterSpacing: "0.5rem",
          fontSize: "18px",
          fontWeight: "600",
          color: "#FFFFFF",
        }}
      >
        BACKED BY
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "column", "row"],
          alignItems: "center",
          justifyContent: "center",
          gap: ["20px", "20px", "20px", "50px"],
        }}
      >
        <img src="/images/investor-1.svg" />
        <img src="/images/investor-2.svg" />
      </Box>
    </Box>
  );
}

export default Investors;
