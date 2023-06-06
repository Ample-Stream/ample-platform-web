import { Plus_Jakarta_Sans } from "next/font/google";
import axios from "axios";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { Box, Button, Image, Input, Spinner, Text } from "theme-ui";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

function ContactUs() {
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setInvalidEmail(true);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/subscribe", {
        email: email,
      });
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#0d1223",
        padding: "40px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Text
            className={inter.className}
            sx={{
              color: "#FFFFFF",
              margin: "5px",
              fontSize: ["18px", "16px", "16px", "22px"],
              fontWeight: "400",
              textAlign: "center",
              letterSpacing: "0.05em",
            }}
          >
            SUBSCRIBE TO OUR LATEST UPDATES!
          </Text>
          <Input
            sx={{
              width: "100%",
              height: 50,
              fontWeight: 700,
              backgroundColor: "#fff",
              borderRadius: 8,
              display: "flex",
              paddingLeft: 24,
              paddingRight: 24,
              color: "#0A3F5C",
              fontSize: [22, 24, 26, 30],
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E3E3E3",
              background: "#F3F3F3",
              textAlign: "center",
            }}
            onChange={handleEmailChange}
          />
          <Text
            className={inter.className}
            sx={{
              color: "white",
              fontSize: ["16px", "14px", "14px", "18px"],
              textAlign: "center",
            }}
          >
            We will be reaching you about all exciting updates from Ample soon !
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                color: "#FFF",
                backgroundColor: "#0E76FD",
                borderRadius: "12px",
                height: "2.75rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginTop: "10px",
              }}
              onClick={handleSubmit}
            >
              <FiMail style={{ color: "#FFFFFF", fontSize: "1.5rem" }} />
              <Text
                sx={{
                  color: "#FFF",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Subscribe
              </Text>
            </Button>
            {loading ? (
              <Spinner
                sx={{ color: "#Ffffff", width: "20px", height: "20px" }}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
