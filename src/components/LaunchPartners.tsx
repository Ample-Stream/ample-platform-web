import React from "react";
import { Box, Image, Text } from "theme-ui";

function LaunchPartners() {
  const partners = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "30px 50px",
        backgroundColor: "#0d1223",
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          position: "absolute",
        }}
      >
        <Image
          src="/images/gradient-dark.png"
          sx={{ opacity: "1", height: "100%" }}
        />
      </Box>
      <Text
        sx={{
          letterSpacing: "0.5rem",
          fontSize: "18px",
          fontWeight: "600",
          color: "#FFFFFF",
        }}
      >
        LAUNCH PARTNERS
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {partners.map((partner, i) => (
          <img
            key={`partner-${i}`}
            alt="partner"
            src={`/images/partners/partner (${partner}).png`}
            style={{
              width: "350px",
              height: "200px",
              borderRadius: "16px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px inset",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default LaunchPartners;
