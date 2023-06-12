import React from "react";
import { Box, Image, Text } from "theme-ui";

function Team() {
  const teamMembers = [
    {
      position: "CEO",
      name: "Kenny Johns",
      description:
        "Senior Producer/Editor for major networks including Nat Geo, Discovery, MTV/Viacom. Built broadcast SOPs, delivered award-winning commercials plus 100’s of network content pieces.  Serial entrepreneur with 16+ years of biz dev, project management, sales, and marketing experience. Selected as one of DC's Top 100 Innovators.",
      linkedin: "https://www.linkedin.com/in/kenny-johns-8260a28/",
      image: "/images/team/kenny_johns.png",
    },
    {
      position: "TECHNICAL PRODUCT MANAGER",
      name: "Sheldon Dearr",
      description:
        "Technical Lead for Octopus Network, a multichain, interoperable cryptonetwork($350M MC). Responsible for security, design ad solutions integration.  Fortune 500 IT/Network Security experience with Hewlett Packard, Arrow Electronics and Charles Schwab.",
      linkedin: "https://www.linkedin.com/in/sheldondearr/",
      image: "/images/team/sheldon.png",
    },
    {
      position: "PARTNERSHIPS",
      name: "Michael Pratt",
      description:
        "Audio engineer having 15+ years experience with major record labels, publishers, artists and producers.  Most recent work includes: UMPG, Sony ATV, Pulse Music Group, Dallas Austin, Jeremy Renner, Diddy, Walter Afanasieff and Disney+",
      linkedin: "https://www.linkedin.com/in/prattism/",
      image: "/images/team/pratt.png",
    },
    {
      position: "HOUSE COUNSEL",
      name: "Josh Hale",
      description:
        "Crypto, NFT, DAO Lawyer, Advisor and Keynote Speaker. Experience with high-tech, telecom, intellectual property, and international law. 16+ years experience with Fortune 500 companies, blockchain startups and businesses. Serves as a DC based Cryptocurrency Development Chair.",
      linkedin: "https://www.linkedin.com/in/thisthatjosh/",
      image: "/images/team/josh.png",
    },
    {
      position: "MUSIC ADVISOR",
      name: "Blue Hamilton",
      description:
        "Platinum and Gold records in 17 countries, 2 Billboard #1 albums, Grammy nominated, 6 gold, 12 silver, 5 bronze Cannes Lions awards.",
      imstagram: "https://www.instagram.com/bassieblue/?hl=en",
      image: "/images/team/blue_hamilton.png",
    },
    {
      position: "TV/SHOW ADVISOR",
      name: "Nick Panagopulos",
      description:
        "Executive Producer for major networks and streamers including Discovery, History Channel, Food Network, HGTV, A&E, Warner Brothers.",
      linkedin: "https://www.linkedin.com/in/simplealien/",
      image: "/images/team/nick.png",
    },
    {
      position: "FILM/SHOW ADVISOR",
      name: "Todd Remis",
      description:
        "Producer or Executive Producer for 30+ films, many of which have premiered at festivals including Sundance, Cannes, Tribeca, and SXSW.",
      linkedin: "https://www.linkedin.com/in/toddremis/",
      image: "/images/team/todd_remis.png",
    },
    {
      position: "WEB/MARKETING ADVISOR",
      name: "Ryan Brannon",
      description:
        "Successful tech entrepreneur who specializes in search engine marketing, brand awareness, and conversion rate optimization.",
      linkedin: "https://www.linkedin.com/in/ryanbrannon",
      image: "/images/team/ryan_brannon.png",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: ["30px 20px", "30px 20px", "30px 20px", "30px 50px"],
        backgroundColor: "#0d1223",
      }}
    >
      <Text
        sx={{
          letterSpacing: "0.5rem",
          fontSize: "18px",
          fontWeight: "600",
          color: "#FFFFFF",
          marginTop: "30px",
        }}
      >
        OUR TEAM
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
        {teamMembers.map((member, i) => (
          <Box
            key={`member-${member.name}`}
            sx={{
              backgroundColor: "#131330",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "300px",
              height: "550px",
              gap: "30px",
            }}
          >
            <img
              src={member.image}
              style={{
                borderRadius: "16px",
                width: "200px",
                // height: "190px",
                background:
                  "linear-gradient(135deg, hsla(0, 96%, 69%, 0.2) 0%, hsla(225, 84%, 64%, 0.2) 100%)",
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Text
                sx={{ color: "#FFFFFF", fontWeight: "400", fontSize: "14px" }}
              >
                {member.position}
              </Text>
              <Text
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "700",
                  fontSize: "24px",
                  letterSpacing: "0.05em",
                }}
              >
                {member.name}
              </Text>
              <Text
                sx={{ color: "#FFFFFF", fontWeight: "400", fontSize: "16px" }}
              >
                {member.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Team;
