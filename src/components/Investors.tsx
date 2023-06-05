import React from "react";
import { Box, Image, Text } from "theme-ui";

function Investors() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "column", "column", "row"],
        alignItems: "center",
        justifyContent: "center",
        gap: "0px",
        marginBottom: "40px",
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
          sx={{ opacity: "0.1", filter: "blur(3px)" }}
        />
      </Box>
      <Text
        sx={{
          letterSpacing: "0.5rem",
          fontSize: "18px",
          fontWeight: "600",
          color: "#5a6893",
        }}
      >
        BACKED BY
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          //   gap: "50px",
        }}
      >
        {/* <img src="/images/investor-1.svg" />
        <img src="/images/investor-2.svg" /> */}
        <img
          src="/images/near-logo.png"
          style={{ height: "200px" }}
          alt="near-logo"
        />
      </Box>
    </Box>
  );
}

export default Investors;
