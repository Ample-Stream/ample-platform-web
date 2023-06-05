import React from "react";
import JotformEmbed from "react-jotform-embed";
import { Box } from "theme-ui";

function ContactUs() {
  return (
    <Box sx={{ marginBottom: "20px", width: "100%" }}>
      <JotformEmbed src="https://form.jotform.com/231552439390457" />
    </Box>
  );
}

export default ContactUs;
